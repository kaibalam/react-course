import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dhzqmvznz',
    api_key: '161652497857294',
    api_secret: '2C-V21fe0gAqAr7DUV2cUOCwBJI',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async () => {
        const imageUrl = 'https://pixlr.com/images/index/ai-image-generator-one.webp';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        console.log({ segments });
        const imageId = segments[segments.length - 1].replace('.webp',''); //aqui debe tener la extensión del tipo de imagen jpg,jpeg,webp etc.
        console.log({ imageId });
        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
        console.log({ cloudResp });
    })

    test('debe de retornar null', async () => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    })
})