import React from "react"
import {View,Text,Button} from "react-native"
import SpotifyAPI from "../spotifyAPI"


function Excited(){

    return(
        <View>
            <Text>Excited</Text>
            <SpotifyAPI setMood = "Beats"/>

        </View>
    )
}

export default Excited