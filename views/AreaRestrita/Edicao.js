import React , {useState , useEffect} from "react";
import { View , Text, TouchableOpacity } from "react-native";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { css } from "../../assets/css/css";
import { TextInput } from "react-native-paper";


export default function Edicao({navigation}){

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR , setDisplayQR] = useState('flex')
    const [displayForm , setDisplayForm] = useState('none')
    const [code , setCode] = useState(null)
    const [product , setProduct] = useState(null)
    const [localization , setLocalization] = useState(null)


    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
      }, []);

      async function handleBarCodeScanned ({ type, data }) {
        setScanned(true);
        setDisplayQR('none')
        setDisplayForm('flex')
        setCode(data)
      };

      async function sendForm(){

      }

    return(
            <View>
                <MenuAreaRestrita title='Edição' navigation={navigation} />
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : value=>handleBarCodeScanned(value)}
                style={css.qr__code(displayQR)}
                />
                <View style={css.qr__form(displayForm)} >

                    <View>

                        <Text>Código do produto: {code}</Text>

                        <TextInput
                            placeholder="Nome do produto:"
                            onChangeText={text=>setProduct(text)}
                            value={product}
                        />

                    </View>

                    <View>
                        <TextInput
                            placeholder="Localização do produto"
                            onChangeText={text=>setLocalization(text)}
                            value={localization}
                        />
                    </View>

                    <TouchableOpacity onPress={()=>sendForm()} >
                        <Text>Atualizar</Text>
                    </TouchableOpacity>

                </View>
            </View>
    )
}