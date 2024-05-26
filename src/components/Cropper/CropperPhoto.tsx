import React from 'react';
import {View, Image} from "react-native";
import ImagePicker, {Image as CropPickerImage,} from 'react-native-image-crop-picker';
import styles from './styleCropper'
import CropButton from "../CropButton/CropButton";


interface CropperPhotoProps {
    image: CropPickerImage,
    getNewPhoto: () => void,
    cropPhoto: (image: CropPickerImage) => void,
    isCropped: boolean
}


const CropperPhoto: React.FC<CropperPhotoProps> = ({image, getNewPhoto, cropPhoto, isCropped}) => {
    const handleCropImage = () => {
        ImagePicker.openCropper({ // Открыть фотографию для обрезки
            mediaType: 'photo',
            path: image.path,
            width: image.width,
            height: image.height,
            cropping: true,
            cropperCircleOverlay: true, // Обрезка фото в виде окружности
            freeStyleCropEnabled: true,
            cropperChooseText: 'Обрезать',
            cropperCancelText: 'Назад',
        }).then(image => {
            cropPhoto(image)
        })
    }
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{uri: image.path}}
                    alt="Изображение выбранной картинки для обрезки"
                    style={[styles.imagePhoto, isCropped ? styles.imagePhotoCropped : null]}
                />
            </View>
            {!isCropped && <View>
                <CropButton value="Обрезать данное фото" onPress={handleCropImage} />
            </View>}
            <View>
                <CropButton value="Выбрать другое для обрезки фото из галереи" onPress={getNewPhoto} />
            </View>

        </View>
    );
};

export default CropperPhoto;
