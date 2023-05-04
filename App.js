import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.bounce} />
            <Text style={styles.title}>Create an Account</Text>
            <View style={styles.photo}>
                <TouchableOpacity>
                    <Text style={styles.photoTitlePlus}> + </Text>
                    <Text style={styles.photoTitle}> Add Photo </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#98BBE0"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    placeholderTextColor="#98BBE0"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#98BBE0"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#98BBE0"
                />
            </View>
            <View style={styles.terms}>
                <Text style={styles.termsTitle}> Terms of Service</Text>
                <Text style={styles.termsTitleand}> and </Text>
                <Text style={styles.termsTitle}> Privacy Policy</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.signup}>or sign up with</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <TouchableOpacity>
                    <Text style={styles.iconText}>
                        <AntDesign name="google" size={20} color="white"  />
                        {' '}Google
                    </Text>
                </TouchableOpacity>
                <View style={{height: 45, width: 1, backgroundColor: '#469FFF', marginLeft: 10}}/>
                <TouchableOpacity>
                    <Text style={styles.iconText}>
                        <AntDesign name="facebook-square" size={20} color="white"/>
                        {' '}
                        Facebook</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontStyle: 'normal',
        fontSize: 36,
        fontWeight: '700',
        lineHeight: 43,
        textAlign: 'center',
        letterSpacing: 0.36,
        marginBottom: 24
    },
    photo: {
        alignItems: "center",
        justifyContent: "center",
        width: 110,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        height: 110,
        borderRadius: 100,
        marginBottom: 24
    },
    photoTitle: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 23,
        fontStyle: 'normal',
        textAlign: "center"
    },
    photoTitlePlus: {
        color: '#fff',
        marginRight: 2,
        fontWeight: '400',
        fontSize: 30,
        fontStyle: 'normal',
        textAlign: "center"
    },
    input: {
        marginBottom: 7,
        padding: 10,
        fontStyle: 'normal',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        width: 373,
        height: 50,
        backgroundColor: '#0055B2',
        borderRadius: 8,
        color: '#fff'
    },
    terms: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 24
    },
    termsTitle: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: -0.08,
        textAlign: "center"
    },
    termsTitleand: {
        color: '#66AFFF',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: -0.08,
        textAlign: "center",
    },
    createButton: {
        width: 373,
        backgroundColor: '#fff',
        height: 50,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        padding: 10,
        marginBottom: 24
    },
    buttonText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 18,
    },
    signup: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 15
    },
    section: {
        marginTop: 24,
        alignContent: "center",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        width: 373,
        height: 50,
        borderRadius: 10
    },
    iconText: {
        justifyContent: 'center',
        color: '#fff',
        textAlign: "center",
        fontSize: 18,
        fontWeight: 500,
    },
    bounce: {
        backgroundColor: '#0070EB',
        width: 184,
        height: 184,
        justifyContent: 'flex-start',
        textAlign: 'left',
        borderRadius: '100%',
        position: 'absolute'
    }
});
