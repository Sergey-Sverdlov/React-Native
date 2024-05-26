import React from 'react';
import {Text, View} from "react-native";
import CropButton from "../../components/CropButton/CropButton";
import ImagePicker, {Image as CropPickerImage} from 'react-native-image-crop-picker';
import CropperPhoto from "../../components/Cropper/CropperPhoto";

const EditPhoto = () => {
    const [image, setImage] = React.useState<CropPickerImage | null>(null); // в данном состоянии находится фото
    const [error, setError] = React.useState<Error | null>(null);
    const [isCropped, setIsCropped] = React.useState<boolean>(false); // Обрезанная уже фотография или нет

    const takePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            mediaType: 'photo',
        })
            .then(img => {
                setImage(img);
                setError(null);
                setIsCropped(false) // Установить, что фото загружено, но не обрезанно
            })
    }

    const cropPhoto = (newImage: CropPickerImage): void => {
        setImage(newImage);
        setIsCropped(true)
    }

    return (
        <View>
            {image && <CropperPhoto
                image={image}
                getNewPhoto={takePhotoFromGallery}
                cropPhoto={cropPhoto}
                isCropped={isCropped}
            />}
            {!image && <CropButton value="Выбрать фото из галереи" onPress={takePhotoFromGallery}/>}
            {error && <Text>Произошла ошибка {error}. Попробуйте еще раз</Text>}
        </View>
    );
};


export default EditPhoto;
