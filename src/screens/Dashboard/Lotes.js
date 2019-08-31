import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { images } from '../../common/images'
import { p } from '../../common/normalize'
import { colors } from '../../common/colors'
import { Actions } from 'react-native-router-flux'
import { getCluster } from '../Map/Test/MapUtils'
import MapView, { Callout } from 'react-native-maps'
import ClusterMarker from '../Map/Test/ClusterMarker'
import ActionButton from 'react-native-action-button'
import text from '../../common/text'
import * as HEADER from '../../components/Headers'
import * as ICON from '../../components/Icons'
import * as ATOM from '../../components/Atoms';
import Cache from '../../common/cache';

const COORDS = [
    { lat: Cache.LAT, lon: Cache.LNG },
];
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Lotes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing: null,
            create: false,
            text: 'Buscar',
            isWaiting: false,
            region: {
                latitude: Cache.LAT,
                longitude: Cache.LNG,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              },
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
        Actions.lotecreatedetail({ area: this.state.editing });
    }

    remove() {
        const { editing } = this.state;
        if(editing){
            const array = editing.coordinates;
            this.setState({
                editing: {
                    ...editing,
                    coordinates: this.state.editing.coordinates.filter((_, i) => i !== parseInt(array.length - 1))
                },
            });
        } else {
            this.setState({ create: false})
        }
        
    }

    onPress(e) {

        const { editing, create } = this.state;

        if( create){
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
        } else {
            console.log(' Ung')
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

        const { create, region, editing, isWaiting } = this.state;
        const allCoords = COORDS.map(c => ({
            geometry: {
                coordinates: [c.lon, c.lat]
            }
        }));
        const cluster = getCluster(allCoords, region);

        const mapOptions = {
            scrollEnabled: true,
        };

        if (!!editing)  {
            mapOptions.scrollEnabled = false;
            mapOptions.onPanDrag = e => this.onPress(e);
        }

        return (
            <View style={styles.container}>

                {isWaiting && <ATOM.Loading visible={ isWaiting }/>}

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
                    initialRegion={region}
                    mapType={"satellite"}
                    onPress={e => this.onPress(e)}
                    onRegionChangeComplete={region => this.setState({ region })}
                >

                    {/* {cluster.markers.map((marker, index) => this.renderMarker(marker, index))} */}

                    {this.state.editing && create && <MapView.Polygon
                        coordinates={this.state.editing.coordinates}
                        strokeColor={colors.BLUE2}
                        strokeWidth={p(5)}
                    />}
                    {this.state.editing && create && this.state.editing.coordinates.map((marker, key) => (
                        <MapView.Marker
                            key={key}
                            coordinate={marker}
                        >
                            <View style={styles.roundPicker}></View>
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
                    <TouchableOpacity onPress={() => this.finish()} style={{ position: 'absolute', right: p(12), bottom: p(110) }}>
                        <Image source={images.save} style={{ width: p(55), height: p(55), marginBottom: p(7), marginLeft: p(5) }} />
                    </TouchableOpacity>
                }

                {
                    create &&
                    <TouchableOpacity onPress={() => this.remove()} style={{ position: 'absolute', right: p(12), bottom: p(50) }}>
                        <Image source={images.undo} style={{ width: p(55), height: p(55), marginBottom: p(7), marginLeft: p(5) }} />
                    </TouchableOpacity>
                }

                <View style={{ position: 'absolute', right: p(21), bottom: p(120) }}>

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
                        size={p(80)}
                        offsetX={p(12)}
                        offsetY={p(12)}
                        spacing={p(5)}
                        renderIcon={active => active ? (<Image source={images.add} style={{ width: p(30), height: p(30) }} />) : (<Image source={images.add} style={{ width: p(27), height: p(27) }} />)}>
                    >
    
                        <ActionButton.Item size={p(80)} buttonColor={colors.WHITE} onPress={() => { this.setState({ create: true }) }}>
                            <Image source={images.lote} style={{ width: p(34), height: p(42) }} />
                        </ActionButton.Item>
                        <ActionButton.Item size={p(80)} buttonColor={colors.WHITE} onPress={() => Actions.addCampo()}>
                            <Text style={{ fontSize: p(15), textAlign: 'center', color: colors.BLUE2 }}>{'New\nCampo'}</Text>
                        </ActionButton.Item>
                        <ActionButton.Item size={p(80)} buttonColor={colors.WHITE} onPress={() => Actions.addNotes()}>
                            <Image source={images.nota} style={{ width: p(28), height: p(45) }} />
                        </ActionButton.Item>
                        <ActionButton.Item size={p(80)} buttonColor={colors.WHITE} onPress={() => Actions.addTareas()}>
                            <Image source={images.tarea} style={{ width: p(28), height: p(48) }} />
                        </ActionButton.Item>
                        <ActionButton.Item size={p(80)} buttonColor={colors.WHITE} onPress={() => Actions.addCultivos()}>
                            <Image source={images.cultivo} style={{ width: p(33), height: p(46) }} />
                        </ActionButton.Item>
                    </ActionButton>
                }

               {
                    this.state.editing && 
                <Callout style={{ bottom: p(12), alignSelf: 'center' }}>
                  <Text style={styles.description}>
                    { editing.coordinates.length == 1 && 'Marca una esquina de tu lote para comenzar' }
                    { editing.coordinates.length == 2 && 'Marca las siguientes esquinas hasta completar\nel perimetro del lote' }
                    { editing.coordinates.length > 2 && 'Edita los bordes de tu lote y a continuacion\ntoca guardar' }

                  </Text>
                </Callout>
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
      },
      roundPicker: {
        width: p(24), 
        height: p(24), 
        borderRadius: p(13),
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#787878',
      },
      description: {
          color: '#fff',
          fontSize: p(18),
          textAlign: 'center'
      }
});