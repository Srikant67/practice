const data = [
    {
        id:1,
        name:"Las Vegas",
        info:"Las Vegas, often known simply as Vegas, is the 25th-most populous city in the United States, the most populous city in the state of Nevada, and the county seat of Clark County. The Las Vegas Valley metropolitan area is the largest within the greater Mojave Desert, and 2nd-largest in the Southwestern United States. Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife. The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg/1280px-Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg",
        price:"4,40,000"
    },
    {
        id:2,
        name:"Tokyo",
        info:"Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/1280px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg",
        price:"2,10,000"
    },
    {
        id:3,
        name:"Dubai",
        info:"Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the 7 emirates of the United Arab Emirates. Established in the 18th century as a small fishing village, the city grew rapidly in the early 21st century with a focus on tourism and luxury, having the second most five-star hotels in the world, and the tallest building in the world, the Burj Khalifa, which is 828 metres (2,717 ft) tall.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1280px-Dubai_Marina_Skyline.jpg",
        price:"1,20,000"
    },
    {
        id:4,
        name:"Bali",
        info:"Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast. The provincial capital, Denpasar,[7] is the most populous city in the Lesser Sunda Islands and the second-largest, after Makassar, in Eastern Indonesia. The upland town of Ubud in Greater Denpasar is considered Bali's cultural centre. The province is Indonesia's main tourist destination, with a significant rise in tourism since the 1980s. Tourism-related business makes up 80% of its economy.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Wonderfull_Nusa_Penida.jpg/1280px-Wonderfull_Nusa_Penida.jpg",
        price:"2,15,000"
    },
    {
        id:5,
        name:"Munich",
        info:"Munich is the capital and most populous city of the Free State of Bavaria. With a population of 1,558,395 inhabitants as of 31 July 2020, it is the third-largest city in Germany, after Berlin and Hamburg, and thus the largest which does not constitute its own state, as well as the 11th-largest city in the European Union. The city's metropolitan region is home to 6 million people.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Vista_panor%C3%A1mica_desde_Olympiapark%2C_M%C3%BAnich%2C_Alemania_2012-04-28%2C_DD_03.JPG/1920px-Vista_panor%C3%A1mica_desde_Olympiapark%2C_M%C3%BAnich%2C_Alemania_2012-04-28%2C_DD_03.JPG",
        price:"1,45,000"
    },
    {
        id:6,
        name:"Paris",
        info:"Paris is the capital and most populous city of France, with an official estimated population of 2,102,650 residents as of 1 January 2023 in an area of more than 105 km² (41 sq mi), making it the fourth-most populated city in the European Union as well as the 30th most densely populated city in the world in 2022. Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, and science. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1920px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        price:"3,60,000"
    },
    {
        id:7,
        name:"Reykjavík",
        info:"Reykjavík is the capital and largest city of Iceland. It is located in southwestern Iceland, on the southern shore of Faxaflói bay. Its latitude is 64°08' N, making it the world's northernmost capital of a sovereign state. Reykjavík had a population of 121,822 in 2015. It is the centre of Iceland's cultural, economic, and governmental activity, and is a popular tourist destination among foreigners. ",
        image:"https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg",
        price:"2,70,000"
    },
    {
        id:8,
        name:"Barcelona",
        info:"Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits, its urban area extends to numerous neighbouring municipalities within the Province of Barcelona and is home to around 4.8 million people, making it the fifth most populous urban area in the European Union after Paris, the Ruhr area, Madrid, and Milan. It is one of the largest metropolises on the Mediterranean Sea, located on the coast between the mouths of the rivers Llobregat and Besòs, and bounded to the west by the Serra de Collserola mountain range.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/14-08-05-barcelona-RalfR-022.jpg/330px-14-08-05-barcelona-RalfR-022.jpg",
        price:"3,50,000"
    },
    {
        id:9,
        name:"Amsterdam",
        info:"Amsterdam is the capital and most populous city of the Netherlands, with The Hague being the seat of government. Located in the Dutch province of North Holland, Amsterdam is colloquially referred to as the Venice of the North, for its large number of canals, now designated a UNESCO World Heritage Site.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1280px-KeizersgrachtReguliersgrachtAmsterdam.jpg",
        price:"3,40,000"
    },
    {
        id:10,
        name:"Noida",
        info:"Noida, short for New Okhla Industrial Development Authority, is a city located in Gautam Buddha Nagar district of the Indian state of Uttar Pradesh. Noida is a satellite city of Delhi and is a part of the National Capital Region (NCR) of India. The city is managed by New Okhla Industrial Development Authority (NOIDA). The district's administrative headquarters are in the nearby city of Greater Noida.",
        image:"https://i1.sndcdn.com/artworks-dcZZznwvCIjxzVdh-Ia2kPw-t500x500.jpg",
        price:"100"
    }
]

export default data;