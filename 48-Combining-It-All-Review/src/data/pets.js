const allPets = [
  {
    id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
    type: 'dog',
    gender: 'male',
    age: 4,
    weight: 1,
    name: 'Trident',
    isAdopted: false,
    photo: "https://dogsbestlife.com/wp-content/uploads/2019/08/Border.png"
  },
  {
    id: '2c902312-dfa3-446f-8b4b-5e115170d807',
    type: 'cat',
    gender: 'male',
    age: 3,
    weight: 1,
    name: 'Teddy',
    isAdopted: false,
    photo: "https://i.pinimg.com/originals/3c/6f/b0/3c6fb062b6f9c6fe3be889aaad5a71e0.jpg"
  },
  {
    id: '2',
    type: 'building',
    gender: 'none',
    age: 'not yet born',
    weight: "Gaudí disliked drawings and prefered to explore his designs using scale models made of chains or weighted strings.",
    name: 'La Sagrada Familia',
    photo: 'http://www.barcelonaconnect.com/wp-content/uploads/2014/10/file.jpg',
    isAdopted: false,
  },
  {
    id: '6057de4f-6725-4b9f-a0b1-1f3bd3ad04a6',
    type: 'cat',
    gender: 'male',
    age: 2,
    weight: 5,
    name: 'Hemingway',
    isAdopted: false,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/220px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"
  },
  {
    id: 'a7c8b608-0d39-401b-a693-1bc882f21425',
    type: 'dog',
    gender: 'male',
    age: 1,
    weight: 1,
    name: 'Paws',
    isAdopted: false,
    photo: "https://blessdachshundpuppies.com/wp-content/uploads/2019/04/AKC-Miniature-Dachshund-Puppy.jpg"
  },
  {
    id: '0ad23cf0-6ea5-432c-bb48-8556a5c1a484',
    type: 'dog',
    gender: 'female',
    age: 6,
    weight: 3,
    name: 'Silent',
    isAdopted: false,
    photo: "http://www.huntthenorth.com/_images//Brensue_labs_photo1.jpg"
  },
  {
    id: 'ffc4663d-71f3-4ad9-8242-973756c8b8b1',
    type: 'dog',
    gender: 'female',
    age: 10,
    weight: 5,
    name: 'Wisdom',
    isAdopted: false,
    photo: "http://dogletter.com/images/dog-age-graying.jpg"
  },
  {
    id: '9750e959-f8ef-465f-9e13-16323454dc1f',
    type: 'micropig',
    gender: 'male',
    age: 4,
    weight: 5,
    name: 'Hemingway',
    isAdopted: false,
    photo: "https://i.pinimg.com/originals/aa/60/dd/aa60ddc462b8e3a8335de2fa4c4489bb.jpg"
  },
  {
    id: '24064151-0d34-4b9e-ba29-d4289bda8fe6',
    type: 'micropig',
    gender: 'male',
    age: 9,
    weight: 4,
    name: 'Radar',
    isAdopted: false,
    photo: "https://minipocketpigs.com/wp-content/uploads/2018/01/Red-Boy-17-1-350x350.jpg"
  },
  {
    id: '18854fc7-00c9-4d6a-b3c6-bfd9a06ce1e7',
    type: 'dog',
    gender: 'male',
    age: 6,
    weight: 2,
    name: 'Teddy',
    isAdopted: false,
    photo: "https://www.thesprucepets.com/thmb/WDDL9pCZIHt2lMHM0JRhS_qE0bk=/2832x2832/smart/filters:no_upscale()/old-english-sheepdog-sticking-out-tongue-713838563-5c0a7582c9e77c0001e281c7.jpg"
  },
  {
    id: '016b0d4a-1d80-45df-824e-f4ff06b07532',
    type: 'dog',
    gender: 'male',
    age: 5,
    weight: 6,
    name: 'Olson',
    isAdopted: false,
    photo: "http://www.wildwindbritlabs.com/images/chloe1.jpg"
  },
  {
    id: '5ed05348-77ed-4f50-82fc-a004e13f496f',
    type: 'cat',
    gender: 'male',
    age: 6,
    weight: 2,
    name: 'Max',
    isAdopted: false,
    photo: "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=H0FcH69a"
  },
  {
    id: '20f15086-7952-4ead-bee4-bd8d8f990738',
    type: 'cat',
    gender: 'male',
    age: 5,
    weight: 1,
    name: 'Strike',
    isAdopted: false,
    photo: "https://www.washingtonian.com/wp-content/uploads/2019/07/Sapphire-2-2048x2048.jpg"
  },
  {
    id: '1b44f0ee-1957-471b-b474-92650053995c',
    type: 'cat',
    gender: 'male',
    age: 8,
    weight: 4,
    name: 'Sprout',
    isAdopted: false,
    photo: "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/14426/14426625/66547421_500x500.jpg"
  },
  {
    id: '1a56b25a-008f-4c00-bdb7-9302ca608964',
    type: 'dog',
    gender: 'male',
    age: 6,
    weight: 5,
    name: 'Sprout',
    isAdopted: false,
    photo: "https://3d4igz27oxtl2iwox73y9smh-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Miniature-Goldendoodle-Dog.jpg"
  },
  {
    id: '5f0ca9bc-5454-4ff5-a7d7-2c8d0a0f1583',
    type: 'dog',
    gender: 'male',
    age: 1,
    weight: 3,
    name: 'Teasle',
    isAdopted: false,
    photo: "https://photos.puppyspot.com/breeds/299/card/500000290_medium.jpg"
  },
  {
    id: 'a0afc449-6705-4c7e-8b96-efcfc997dc86',
    type: 'dog',
    gender: 'female',
    age: 5,
    weight: 1,
    name: 'Mickey',
    isAdopted: false,
    photo: "https://www.lombardvet.com/sites/default/files/styles/large/adaptive-image/public/yorkshire-terrier-dog-breed-info.jpg?itok=XKLf8rXH"
  },
  {
    id: '1',
    type: 'building',
    gender: 'none',
    age: 48,
    weight: "Each chandelier in the grand foyer weighs one ton.",
    name: 'The Kennedy Center',
    photo: 'http://marcelsdc.com/imageGen.ashx?&class=McBackgroundImageMobile&image=/media/117788/kennedy-center-3.jpg',
    isAdopted: false,
  },
  {
    id: 'cf8c0815-ec1a-41a2-806b-5df40c0fff99',
    type: 'dog',
    gender: 'female',
    age: 9,
    weight: 6,
    name: 'Jane',
    isAdopted: false,
    photo: "https://cdn.shopify.com/s/files/1/0128/0882/files/cleo_large.jpg?v=1505420052"
  },
  {
    id: '354c61e0-d3cb-4163-8132-877a1a4198c6',
    type: 'micropig',
    gender: 'female',
    age: 6,
    weight: 5,
    name: 'Ivy',
    isAdopted: false,
    photo: "https://i.pinimg.com/originals/ee/85/f4/ee85f44ef126a550bd8fecea426518d3.jpg"
  },
  {
    id: '103bf0d9-00a3-41d4-b980-a2f3518a6b15',
    type: 'dog',
    gender: 'female',
    age: 8,
    weight: 3,
    name: 'Gin',
    isAdopted: false,
    photo: "https://pbs.twimg.com/profile_images/748677687284236289/14nr-AV4.jpg"
  },
  {
    id: 'f6890e01-410b-4676-8346-e5d7fe147330',
    type: 'dog',
    gender: 'male',
    age: 8,
    weight: 3,
    name: 'Spiral',
    isAdopted: false,
    photo: "https://img.dog-learn.com/dog-breeds/sheltie/shetland-sheepdog-i2-i3-sz14.jpg"
  },
  {
    id: '9e7cc723-d7f5-440d-8ead-c311e68014ee',
    type: 'dog',
    gender: 'male',
    age: 8,
    weight: 6,
    name: 'Kennedy',
    isAdopted: false,
    photo: "https://doggypedia.org/wp-content/uploads/2019/01/32233136_603390276701918_4176912174179942400_n-1024x1024.jpg"
  },
  {
    id: '3',
    type: 'building',
    gender: 'none',
    age: 500,
    weight: "Light enough to be transported from England to Richmond, VA and reconstructed there in 1926.",
    name: 'Agecroft Hall',
    photo: 'https://fastly.4sqi.net/img/general/600x600/484020662_nKhdKdOn4Db6enewNT4OLWciUAfgYeVni8iI6-ZgvzU.jpg',
    isAdopted: false,
  },
  {
    id: '6eaecf43-a54c-435d-a1eb-b4e7195b6a1d',
    type: 'dog',
    gender: 'female',
    age: 1,
    weight: 1,
    name: 'Feta',
    isAdopted: false,
    photo: "https://www.dogstrust.org.uk/sponsor/_dogs/puppy-playgroup-assets/v800_puppy-1.jpg"
  },
  {
    id: '86520b4b-7849-4462-b511-cddc7f416ad6',
    type: 'cat',
    gender: 'female',
    age: 7,
    weight: 6,
    name: 'Cuddles',
    isAdopted: false,
    photo: "https://pbs.twimg.com/profile_images/756320100483858432/OX50XkO__400x400.jpg"
  },
  {
    id: 'f2874129-1524-4423-b7bd-2654a3a4147e',
    type: 'cat',
    gender: 'male',
    age: 5,
    weight: 1,
    name: 'Radar',
    isAdopted: false,
    photo: "https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-6.jpg"
  },
  {
    id: 'a7ea570c-275f-4a4d-aa71-fdd1f72a2c02',
    type: 'cat',
    gender: 'female',
    age: 10,
    weight: 5,
    name: 'Babs',
    isAdopted: false,
    photo: "https://33oezn10chdvlfeziep11ae7-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Oliver-a-Seal-Mitted-with-a-Blaze-Ragdoll-Cat-loved-by-Dorris-Ho-Slomiany-IMG_0360.jpg"
  },
  {
    id: '77a12fc4-887f-4940-9670-8d216e6b653d',
    type: 'dog',
    gender: 'female',
    age: 10,
    weight: 2,
    name: 'Maia',
    isAdopted: false,
    photo: "https://i.barkpost.com/wp-content/uploads/2016/04/border-collie-corgi-featured-photo.jpg?q=70&fit=crop&crop=entropy&w=808&h=808"
  },
  {
    id: '017ed6fe-cf97-4fe1-b92e-f6475b247ff5',
    type: 'dog',
    gender: 'male',
    age: 9,
    weight: 5,
    name: 'Cupid',
    isAdopted: false,
    photo: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45590024/4/?bust=1565641825&width=720"
  },
  {
    id: 'b29ee288-2c10-4c94-ab7b-e53c61b4990a',
    type: 'dog',
    gender: 'male',
    age: 2,
    weight: 4,
    name: 'Clue',
    isAdopted: false,
    photo: "https://i.pinimg.com/originals/59/98/cd/5998cdf3c3495d3c1e160e363f7cd701.jpg"
  },
  {
    id: '22f3520d-573f-407b-878b-283e8421db4e',
    type: 'dog',
    gender: 'female',
    age: 4,
    weight: 3,
    name: 'Dori',
    isAdopted: false,
    photo: "https://doggypedia.org/wp-content/uploads/2018/12/American-Bulldog-Border-Collie-Mix-1024x1024.jpg"
  },
  {
    id: '2940aa06-6e1f-4dfe-a6bc-9a2517547cc3',
    type: 'dog',
    gender: 'male',
    age: 5,
    weight: 3,
    name: 'Cupid',
    isAdopted: false,
    photo: "https://pbs.twimg.com/media/DQEh8rCXkAAd-Zb.jpg"
  },
  {
    id: '3c44545b-94b0-4eff-a960-7805f9677799',
    type: 'dog',
    gender: 'female',
    age: 10,
    weight: 4,
    name: 'Ham',
    isAdopted: false,
    photo: "https://doggypedia.org/wp-content/uploads/2019/04/43914085_766035893735682_1639298003434819006_n-1024x1024.jpg"
  },
  {
    id: 'bf60344b-8674-451b-b39a-df59e54986e6',
    type: 'dog',
    gender: 'male',
    age: 7,
    weight: 5,
    name: 'Teddy',
    isAdopted: false,
    photo: "https://doggypedia.org/wp-content/uploads/2019/04/10576140_690404207762223_1970305161_n-1024x1024.jpg"
  },
  {
    id: '4619fb66-c3da-4ae6-8ed3-894a3dce37d9',
    type: 'micropig',
    gender: 'male',
    age: 2,
    weight: 5,
    name: 'Grim',
    isAdopted: false,
    photo: "https://cdn.fotofits.com/petzlover/gallery/img/l/mini-micro-pig-701148.jpg"
  },
  {
    id: 'f20db164-e63e-45e9-80df-d687988e1f09',
    type: 'cat',
    gender: 'female',
    age: 4,
    weight: 4,
    name: 'Flurry',
    isAdopted: false,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1F_A30hB3iRr6Oc49U1cHctn4NQJLpTsIS9o5xM-aQOZ4hpeEuw"
  },
  {
    id: '6c8e937e-3104-4ceb-a3c7-8cdd6ee90082',
    type: 'dog',
    gender: 'female',
    age: 3,
    weight: 2,
    name: 'Hennessy',
    isAdopted: false,
    photo: "https://www.omlet.us/images/originals/jack-russell-terrier-dogs-rex-the-jack-russell-39fbd3d5_2da98f25.jpg"
  },
  {
    id: '4',
    type: 'building',
    gender: 'none',
    age: 174,
    weight: "One display includes some late Neolithic loom weights from Hungary.",
    name: 'The Ashmolean Museum',
    photo: 'https://conferencing.experienceoxfordshire.org/wp-content/uploads/2016/05/Ashmolean-Museum.jpg',
    isAdopted: false,
  }
];

export const getAll = () => allPets;

export const getByType = type => allPets.filter(pet => pet.type === type);

export const getBetweenAge = (from, to) => allPets.filter(pet => pet.age >= from && pet.age <= to);
