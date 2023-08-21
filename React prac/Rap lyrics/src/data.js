const data = [
    {
        id:1,
        name:"Cardi B",
        song:"Bodak Yellow",
        lyric:"You in the club just to party. I'm there, I get paid a fee.",
        img:"https://cdn.inflact.com/media/318343190_154368360319172_6234049412367922673_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F318343190_154368360319172_6234049412367922673_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fcgp17-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DJy4PUQGSX1IAX91qnY4%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfBYlh9jom2MvfV8mVrT4wJG2yPC9ZRTed2WKEi1dS7yHg%26oe%3D64652B6F%26_nc_sid%3D8fd12b&time=1684062000&key=b04e1854b59a77ab5422ade886a2251e"
    },
    {
        id:2,
        name:"Ice Spice",
        song:"Gansta Boo",
        lyric:"Got a place we can stay for the night but I’m too shy to invite you.",
        img:"https://cdn.inflact.com/media/330329952_781688266646703_6395001259973412894_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F330329952_781688266646703_6395001259973412894_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.ftun19-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3D4h6LBkR2gMUAX9OAiLK%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfCFnE8pfMesDmmb44Ym3qDn2fNfhaXod7K0nH0HQN297w%26oe%3D6465B271%26_nc_sid%3D8fd12b&time=1684062000&key=8a19f404c3e1ab552212bc647a47d02f"
    },
    {
        id:3,
        name:"Megan Thee Stallion",
        song:"Pimpin",
        lyric:"Lick, lick, lick, lick, lick. This is not about your dick/ These are simply just instructions on how you should treat my clit",
        img:"https://cdn.inflact.com/media/298361336_196390782873846_8111008690369690983_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F298361336_196390782873846_8111008690369690983_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fqsf1-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3Dd67LM6AJlnUAX8LmPJQ%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfBWwhSUxCsNrYGJkhBXovpqpAT5dgzi0nwoG3yYSiBMcA%26oe%3D64655367%26_nc_sid%3D8fd12b&time=1684065600&key=3eaed127e06ba4bed8750478f080bd34"
    },
    {
        id:4,
        name:"Taylor Swift",
        song:"Paris ",
        lyric:"I'm so in love that I might stop breathing. Drew a map on your bedroom ceiling.",
        img:"https://cdn.inflact.com/media/301659719_584689096449745_1787586106967359108_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F301659719_584689096449745_1787586106967359108_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fjsr8-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DhI6x4jvpW54AX_cyetf%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfA-K3hotmQEywK_wh2NBcw44n-h0E0ZbU2xfXdRhe_QhQ%26oe%3D646597E7%26_nc_sid%3D8fd12b&time=1684062000&key=a8e6161a5965f635b62d9e746778f88b"
    },
    {
        id:5,
        name:"Ariana Grande",
        song:"Side to Side",
        lyric:"I've been here all night, I've been here all day / And boy got me walkin' side to side.",
        img:"https://cdn.inflact.com/media/340830534_932180087934550_8966124175413162437_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F340830534_932180087934550_8966124175413162437_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fpnh5-5.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DK76Ip71qyMkAX-kaEDq%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfA7X7nMIKHLw27V1yPbcqBg8wR96htfV0QCjv9ZxZbu8A%26oe%3D64664CEF%26_nc_sid%3D8fd12b&time=1684062000&key=7b2aab0d34cb1263460d6a7ee851aef4"
    },
    {
        id:6,
        name:"Beyoncé",
        song:"Blow",
        lyric:"You like it wet and so do I, you like it wet and so do I / I know you never waste a drip, I know you never waste a drip.",
        img:"https://cdn.inflact.com/media/328194889_868276044430485_730992045648961904_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F328194889_868276044430485_730992045648961904_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fceb6-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DLZEenwIkYVgAX8PdoNr%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfDluumybJBBINdy3QgY86uWMk6xabfXfaikEEUE8_VC5Q%26oe%3D6466915D%26_nc_sid%3D8fd12b&time=1684065600&key=3352ee660550942b281e5ce5d6b0d9d1"
    },
    {
        id:7,
        name:"Ariana Grande",
        song:"Love Me Harder",
        lyric:"And if in the moment you bite your lip / When I get you moaning you know it's real / Can you feel the pressure between your hips / I'll make it feel like the first time.",
        img:"https://assets.teenvogue.com/photos/613b5fd248eda7f19679403c/1:1/w_1175,h_1175,c_limit/1235152164"
    },
    {
        id:8,
        name:"Rihanna",
        song:"Skin",
        lyric:"No teasing, you waited long enough / Go deep.",
        img:"https://cdn.inflact.com/media/342386970_3323099214668913_9113152524702039919_n.webp?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F342386970_3323099214668913_9113152524702039919_n.webp%3Fse%3D7%26stp%3Ddst-jpg_e35%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D109%26_nc_ohc%3DMEMhNHb0qMUAX-MXTAJ%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzA4NjgyODI0NTQxNTU5MTE3MQ%253D%253D.2-ccb7-5%26oh%3D00_AfAoDfo7LZQNjcpO2I8Khc59FYkxYP_6Wj2xhAkA2Slayw%26oe%3D64654764%26_nc_sid%3D978cb9&time=1684065600&key=846688cb9b46154be3732482c55f6a03"
    },
    {
        id:9,
        name:"Nicki Minaj",
        song:"Truffle Butter",
        lyric:"Pretty ladies, are you here? Truffle butter on your pussy / Cuddle buddies on the low / You ain't gotta tell your friends that I eat it in the morning / Cause she gonna say, I know.",
        img:"https://cdn.inflact.com/media/298476742_796431761488631_416590513629682527_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F298476742_796431761488631_416590513629682527_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fcai19-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DAUfaP9NgTDsAX_MYVru%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfDst6KyRlSiJSEzo0XXjXOXHKMBGdUGrUDSMLqgVGodjw%26oe%3D6465A329%26_nc_sid%3D8fd12b&time=1684065600&key=e54990ebb53122e0eb2f75add0779d32"
    },
    {
        id:10,
        name:"Rihanna",
        song:"Birthday Cake",
        lyric:"It's not even my birthday / But he want to lick the icing off / I know you want it in the worst way / Can't wait to blow my candles out.",
        img:"https://cdn.inflact.com/media/324840949_1924885661182866_8192321536971360410_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F324840949_1924885661182866_8192321536971360410_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.fceb6-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DW1Fglju-siwAX8sWfAf%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfCtnpoUmsX21nIsYHfmJiLfKIC02MCMagpoT0Q2r_BGtw%26oe%3D646580B1%26_nc_sid%3D8fd12b&time=1684065600&key=b00b55df2f76928266fe515fa5b2abeb"
    }
]

export default data;