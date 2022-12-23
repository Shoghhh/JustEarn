import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { PaperClipIcon, SendMessageIcon } from "../../assets/svgs/OrdersSvgs";
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import Video from 'react-native-video';

export default function SubmitReport() {
    const [files, setFiles] = useState([]);
    const [filePath, setFilePath] = useState('')
    // const [player, setPlayer] = useState({})
    const chooseFile = async () => {

        await MultipleImagePicker.openPicker({ usedCameraButton: false, doneTitle: 'sdfgv', cancelTitle: 'cancel' })
            .then(response => {
                console.log(response)
                // setFilePath(response[0].path)
                setFiles(response)
            })
            .catch(err => console.log(err))

    };

    return <>
        <Text style={styles.purpleText}>Что нужно указать в отчёте о выполненном задании:</Text>
        <Text style={styles.reviewDescription}>Ваш ник, который вы указали при регистрации.
            и прикрепите скриншот просмотра. </Text>
        <View style={styles.inputContainer}>
            <ScrollView horizontal style={{ flexDirection: 'row' }}>
                {/* console.log('ITEM --->>>' ,item);
                    // item.mime === "image/jpeg" && */}
                {/* {filePath && <Image
                source={{ uri: filePath }}
                style={{ width: 100, height: 100, marginBottom: 10, marginRight: 10 }}
            />} */}
                {files && files.map(item => {
                    return <Image
                        source={{ uri: item.path }}
                        style={{ width: 100, height: 100, marginBottom: 10, marginRight: 10 }}
                    />
                    {/* //  : <Video source={{ uri: item.path }}
                    //     ref={ref => setPlayer(ref)}
                    //     onLoad={(naturalSize, duration) => console.log('loaded', naturalSize, duration)}
                    //     style={{ width: 100, height: 100, marginBottom: 10, marginRight: 10 }}
                    // /> */}
                })}
            </ScrollView>
            {/* { filePath && <Image
                source={{ uri: filePath }}
                style={{ width: 100, height: 100, marginBottom: 10 }}
            />} */}
            {/* {filePath && <Video source={{ uri: filePath }}   // Can be a URL or a local file.
                ref={ref => setPlayer(ref)}
                onLoad={(naturalSize, duration) => console.log('loaded', naturalSize, duration)} 
                // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                // onError={this.videoError}               // Callback when video cannot be loaded
                style={{ width: 300, height: 400, marginBottom: 10, }}
            />} */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <TextInput style={styles.input} placeholder={'Сообщение...'} placeholderTextColor={'white'} />
                <TouchableOpacity onPress={chooseFile}>
                    <PaperClipIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SendMessageIcon />
                </TouchableOpacity>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    purpleText: {
        color: '#C40B83',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 5,
        marginLeft: 10
    },
    reviewDescription: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 20,
        marginLeft: 10
    },
    inputContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C40B83',
        padding: 10,
        marginBottom: 20,

    },
    input: {
        backgroundColor: '#393939',
        borderRadius: 5,
        fontSize: 15,
        paddingLeft: 13,
        color: 'white',
        width: '75%',
        paddingVertical: 7,
    }


})