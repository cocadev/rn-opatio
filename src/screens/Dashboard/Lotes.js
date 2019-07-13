import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { REGION } from '../../common/config'
import { Actions } from 'react-native-router-flux'
import { getCluster } from '../Map/Test/MapUtils'
import MapView from 'react-native-maps'
import ClusterMarker from '../Map/Test/ClusterMarker'
import ActionButton from 'react-native-action-button'
import text from '../../common/text'
import * as HEADER from '../../components/Headers'
import * as ICON from '../../components/Icons'
const COORDS = [
    { lat: 37.795690, lon: -122.434728 },
    // { lat: 37.805690, lon: -122.434728 },
    // { lat: 37.815690, lon: -122.424728 },
    // { lat: 37.795690, lon: -122.454728 },
    // { lat: 37.795690, lon: -122.444728 }
];

export default class Lotes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: null,
            create: false,
            region: REGION,
            text: 'Buscar',
        }
    }

    viewMap = () => {
        Actions.mapSearch({
          update: (location, key) => {
            this.setState({
              region: {
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }, 
              text: key
            });
          }
        })
    }

    _findMe =()=> {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords
            this.setState({
              position: {
                latitude,
                longitude,
              },
              region: {
                latitude,
                longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.001,
              }
            })
          },
          (error) => alert(JSON.stringify(error)),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    finish() {
        this.setState({
            editing: null, create: false
        });
        Actions.lotecreatedetail();
    }

    remove() {
        const { editing } = this.state;
        const array = editing.coordinates;
        this.setState({
            editing: {
                ...editing,
                coordinates: this.state.editing.coordinates.filter((_, i) => i !== parseInt(array.length - 1))
            },
        });
    }

    onPress(e) {
        const { editing } = this.state;
        if (!editing) {
            this.setState({
                editing: {
                    coordinates: [e.nativeEvent.coordinate],
                },
            });
        } else {
            this.setState({
                editing: {
                    ...editing,
                    coordinates: [
                        ...editing.coordinates,
                        e.nativeEvent.coordinate,
                    ],
                },
            });
        }
    }

    renderMarker = (marker, index) => {
        const key = index + marker.geometry.coordinates[0];

        // If a cluster
        if (marker.properties) {
            return (
                <MapView.Marker
                    key={key}
                    coordinate={{
                        latitude: marker.geometry.coordinates[1],
                        longitude: marker.geometry.coordinates[0]
                    }}
                >
                    <ClusterMarker count={marker.properties.point_count} />
                </MapView.Marker>
            );
        }
        // If a single marker
        return (
            <MapView.Marker
                key={key}
                coordinate={{
                    latitude: marker.geometry.coordinates[1],
                    longitude: marker.geometry.coordinates[0]
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={images.marker} style={{ width: p(40), height: p(40) }} />
                    <Text style={{ fontSize: p(21), fontWeight: '700', color: colors.WHITE }}> Lote 12</Text>
                </View>
            </MapView.Marker>
        );
    };

    render() {

        const { create, region, editing } = this.state;
        const allCoords = COORDS.map(c => ({
            geometry: {
                coordinates: [c.lon, c.lat]
            }
        }));
        const cluster = getCluster(allCoords, region);

        const mapOptions = {
            scrollEnabled: true,
        };

        if (this.state.editing) {
            mapOptions.scrollEnabled = false;
            mapOptions.onPanDrag = e => this.onPress(e);
        }

        return (
            <View style={styles.container}>
                <MapView
                    ref={instance => this.map = instance}
                    provider={MapView.PROVIDER_GOOGLE}
                    loadingIndicatorColor={"#ffbbbb"}
                    loadingBackgroundColor={"#ffbbbb"}
                    region={region}
                    style={styles.map}
                    showsUserLocation={true}
                    showsCompass={true}
                    zoomEnabled={true}
                    cacheEnabled={true}
                    initialRegion={REGION}
                    mapType={"satellite"}
                    onPress={e => this.onPress(e)}
                    onRegionChangeComplete={region => this.setState({ region })}
                >

                    {cluster.markers.map((marker, index) => this.renderMarker(marker, index))}

                    {this.state.editing && create && <MapView.Polygon
                        coordinates={this.state.editing.coordinates}
                        strokeColor={colors.BLUE2}
                        strokeWidth={3}
                    />}
                    {this.state.editing && create && this.state.editing.coordinates.map((marker, key) => (
                        <MapView.Marker
                            key={key}
                            coordinate={marker}
                        >
                            <Image source={images.circleWhite} style={{ width: p(24), height: p(24), marginTop: p(5) }} />
                        </MapView.Marker>
                    ))}
                </MapView>

                <HEADER.NormalIcon 
                    title={'Lotes'} 
                    icon={<ICON.IconLocation />} 
                    back={colors.BLUE} 
                />

                <TouchableOpacity
                    onPress={this.viewMap}
                    style={styles.searchView}>
                    <Image source={images.blackSearch} style={styles.searchIcon} />
                    <View style={styles.textinput}>
                    <Text style={text.t_12_400_98}>{this.state.text}</Text>
                    </View>
                </TouchableOpacity>

                {
                    create && editing && editing.coordinates.length > 2 &&
                    <TouchableOpacity onPress={() => this.finish()} style={{ position: 'absolute', right: 12, bottom: 70 }}>
                        <Image source={images.save} style={{ width: p(55), height: p(55), marginBottom: p(7), marginLeft: p(5) }} />
                    </TouchableOpacity>
                }

                {
                    create &&
                    <TouchableOpacity onPress={() => this.remove()} style={{ position: 'absolute', right: 12, bottom: 10 }}>
                        <Image source={images.undo} style={{ width: p(55), height: p(55), marginBottom: p(7), marginLeft: p(5) }} />
                    </TouchableOpacity>
                }

                <View style={{ position: 'absolute', right: 21, bottom: p(120) }}>

                    {
                        !create && <TouchableOpacity onPress={this._findMe}>
                            <Image source={images.locate1} style={{ width: p(65), height: p(65), marginBottom: p(4) }} />
                        </TouchableOpacity>
                    }

                    {
                        !create &&
                        <TouchableOpacity onPress={() => Actions.loteselection()}>
                            <Image source={images.lotes2} style={{ width: p(65), height: p(65) }} />
                        </TouchableOpacity>
                    }

                </View>

                {
                    !create &&
                    <ActionButton
                        buttonColor={colors.BLUE}
                        size={80}
                        offsetX={12}
                        offsetY={12}
                        spacing={5}
                        renderIcon={active => active ? (<Image source={images.add} style={{ width: p(30), height: p(30) }} />) : (<Image source={images.add} style={{ width: p(27), height: p(27) }} />)}>
                    >
    
                        <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { this.setState({ create: true }) }}>
                            <Image source={images.lote} style={{ width: p(34), height: p(42) }} />
                        </ActionButton.Item>
                        <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { }}>
                            <Image source={images.nota} style={{ width: p(28), height: p(45) }} />
                        </ActionButton.Item>
                        <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { }}>
                            <Image source={images.tarea} style={{ width: p(28), height: p(48) }} />
                        </ActionButton.Item>
                        <ActionButton.Item size={80} buttonColor={colors.WHITE} onPress={() => { }}>
                            <Image source={images.cultivo} style={{ width: p(33), height: p(46) }} />
                        </ActionButton.Item>
                    </ActionButton>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#F5FCFF'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        top: p(60)
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    textinput: {
        width: p(260),
        height: p(44),
        marginTop: p(60),
        justifyContent: 'center',
        paddingLeft: p(48),
        fontSize: p(16),
        borderColor: colors.GREY8,
        borderWidth: 1,
        borderRadius: p(25)
      },
      searchView: {
        position: 'absolute',
        left: p(60)
      },
      searchIcon: {
        top: p(92),
        left: p(22),
        width: p(20),
        height: p(19)
      }
});