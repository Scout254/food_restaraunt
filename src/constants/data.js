const data = {
    all:[
        {
            id:1,
            image:"https://img.freepik.com/free-photo/murukku-also-known-as-chakli-south-indian-traditional-vegetarian-snack_466689-73243.jpg?t=st=1677318475~exp=1677319075~hmac=4bbbb99c6d0b5f7487051654946a21747b9d8ffc83273a5f9344a75871c0ec0d",
            name:"Murruku",
            desc:"known as chakli south indian traditional vegetarian snack",
            price:"250",
            rating:"https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
        },
        {
            id:2,
            image:"https://img.freepik.com/free-photo/homemade-wheat-tortillas-pita-bread-tortilla-pita-with-ingredients-cooking-white-table-top-view_127032-2505.jpg?w=740&t=st=1677318826~exp=1677319426~hmac=ed83878363af2d7058abfcf000a06cb53e358c0f001ee37d59f62e7dab1eab82",
            name:"Wheat Tortillas",
            desc:"homemade wheat tortillas pita bread tortilla pita with ingredients for cooking",
            price:"120",
            rating:""
        },
        {
            id:3,
            image:"https://img.freepik.com/free-photo/stock-photo-jalebi-jilbi-imarati-indian-sweet-food-fried-pure-ghee-selective-focus_466689-71704.jpg?t=st=1677318817~exp=1677319417~hmac=a4be1980a1a1e3184702907aff59f7ae9cada31b3310cc3ec425fcab404d59ff",
            name:"Jalebi",
            desc:" jalebi or jilbi or imarati, indian sweet food fried in pure ghee",
            price:"262",
            rating:""
        },
        {
            id:4,
            image:"https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?w=740&t=st=1677319005~exp=1677319605~hmac=cc73e589eeeab9736e1a15ef8b3f26ad30c1045ac7b5b13aca3e539271b4c781",
            name:"hawaiian pizza",
            desc:"Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple",
            price:"102",
            rating:""
        },
        {
            id:5,
            image:"https://img.freepik.com/free-photo/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table_1150-37858.jpg?w=740&t=st=1677319134~exp=1677319734~hmac=4690cd64171e9e24bc23f127fbe8f5ee955c1238e499cc0ecbc093938fb61486",
            name:"Grilled chicken",
            desc:"grilled chicken legs in barbecue sauce with pepper seeds parsley",
            price:"456",
            rating:""
        },
        {
            id:6,
            image:"https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=740&t=st=1677319197~exp=1677319797~hmac=59ca57eca0992d926f43922f406e3d18a324ee1d12f41731d6673518c3456c25",
            name:"Chicken wings",
            desc:" baked chicken wings in the asian style and tomatoes sauce",
            price:"369",
            rating:""
        },
        {
            id:7,
            image:"https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=740&t=st=1677319271~exp=1677319871~hmac=94cdf1f6095efd02ee66067bdd1f76801fa9ec4f7469e8264f5b353025b4d734",
            name:"Crispy chicken",
            desc:"crispy fried chicken on a plate with salad and carrot",
            price:"412",
            rating:""
        },
        {
            id:8,
            image:"https://img.freepik.com/free-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72651.jpg?t=st=1677319349~exp=1677319949~hmac=a1652ef26568eb885e27856ad3945017670b16134e78de0df7eadff3eda88e63",
            name:"Lamb biriyani",
            desc:"mutton or lamb biriyani with basmati rice, served in a bowl",
            price:"200",
            rating:""
        },
        {
            id:9,
            image:"https://img.freepik.com/free-photo/side-view-chicken-kebab-with-grilled-hot-green-pepper-tomato-pickled-cabbage-rice-pita_141793-4837.jpg?w=740&t=st=1677319433~exp=1677320033~hmac=5aef0a3a206053f090f3267232a83408c24d86a38c160a42c8e363b56ce87c4c",
            name:"chicken kebab",
            desc:"chicken kebab with grilled hot green pepper tomato pickled",
            price:"537",
            rating:""
        },
        {
            id:10,
            image:"https://img.freepik.com/free-photo/high-angle-pakistan-dish-arrangement_23-2148821521.jpg?w=740&t=st=1677319581~exp=1677320181~hmac=c716edccacf0b1dfd47a19cd309dca524e6a595ad4fcc1c858a69e1f9dd36905",
            name:"Pakistan dish",
            desc:"high angle pakistan dish arrangement",
            price:"",
            rating:""
        },
        {
            id:11,
            image:"https://img.freepik.com/free-photo/bombay-mix-chanachur-chiwda-farsan-is-indian-snack-mix-popular-tea-time-food-from-india_466689-73401.jpg?t=st=1677319349~exp=1677319949~hmac=19b2b10935c53cfb5abb05835f8234d8e97567fe554d95576782ae0b06eab9ca",
            name:"popular indian chanachur",
            desc:"bombay mix or chanachur or chiwda or farsan is an indian snack mix",
            price:"212",
            rating:""
        },

        {
            id:12,
            image:"https://img.freepik.com/free-photo/fried-rice-with-sausage_1339-8075.jpg?w=740&t=st=1677319812~exp=1677320412~hmac=050f8916eb8447635482e46d2eac0d95c8570dd1bb1b705d14025cee1313842d",
            name:"Fried rice",
            desc:"fried rice with sausage",
            price:"106",
            rating:""
        },

        {
            id:13,
            image:"https://img.freepik.com/free-photo/curry-fried-rice_1339-1814.jpg?w=740&t=st=1677319867~exp=1677320467~hmac=ecbfbe0114573fae6e09fc103b9145e9f90a39fc874c2ad6b26492449e86cc61",
            name:"Curry rice",
            desc:"curry fried rice with cucumbers",
            price:"78",
            rating:""
        },

        {
            id:14,
            image:"https://img.freepik.com/free-photo/mutton-kheema-pav-indian-spicy-minced-meat-served-with-bread-kulcha-garnished-with-green-peas-moody-background-selective-focus_466689-74213.jpg?t=st=1677319926~exp=1677320526~hmac=a4de7c54607c767761d42fce12373ea4f91d31f4cfa21c015f0f8e8a865b6a13",
            name:"mutton kheema",
            desc:"mutton kheema pav or indian spicy minced meat served with bread",
            price:"106",
            rating:""
        },

        {
            id:15,
            image:"https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?w=740&t=st=1677320003~exp=1677320603~hmac=e68bb14074a71e3ed32fd2511d65d516d06155a9c457e103d7fb07df6356d42c",
            name:"Fish",
            desc:" delicious fish meal on tray",
            price:"99",
            rating:""
        },

        {
            id:16,
            image:"https://img.freepik.com/free-photo/dorada-baked-with-potatoes_2829-14161.jpg?w=740&t=st=1677320171~exp=1677320771~hmac=c32a51efddd6e7977f23b91fdb2548b92db81931651ffdf729cde67d213cffde",
            name:"Fish potatoes",
            desc:"fish baked with potatoes",
            price:"78",
            rating:""
        },

        {
            id:17,
            image:"https://img.freepik.com/free-photo/red-chicken-curry-murgh-masala-korma-with-prominent-leg-piece_466689-91746.jpg?t=st=1677319926~exp=1677320526~hmac=befe9b77d6a8c74d8aeab6634f215df157d311a0cd0575c0e86f872ffaf1a2c6",
            name:"Fried chicken",
            desc:"red chicken curry or murgh masala or korma with prominent leg piece",
            price:"355",
            rating:""
        },

        {
            id:18,
            image:"https://img.freepik.com/free-photo/side-view-fried-anchovy-with-red-onion-lettuce-slice-lemon-plate_141793-4902.jpg?w=740&t=st=1677320239~exp=1677320839~hmac=a8e3bc36269ee3981986713f20ef8dedec00bff48975f4d5de32f43592954688",
            name:"anchovy and onions",
            desc:" fried anchovy with red onion lettuce and slice of lemon",
            price:"55",
            rating:""
        },

        {
            id:19,
            image:"https://img.freepik.com/premium-photo/pieces-fried-fish-carp-ceramic-plate-dark-wooden-background_193819-3952.jpg?w=740",
            name:"Fried fish",
            desc:"pieces of fried fish (carp) on a ceramic plate",
            price:"150",
            rating:""
        },

        {
            id:20,
            image:"https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_2829-18668.jpg?w=740&t=st=1677320428~exp=1677321028~hmac=66d42115e55bed687b67359d6cff67a446bc266021a54dabe8cc5b2012a7ffe8",
            name:"beef stake",
            desc:"juicy steak medium rare beef with spices and grilled vegetables",
            price:"685",
            rating:""
        },
        {
            id:21,
            image:"https://img.freepik.com/free-photo/front-view-sweet-chocolate-cake_23-2148834059.jpg?w=740&t=st=1677320608~exp=1677321208~hmac=62d030c6f854be820f279af720c7eef2d25656b0e9a792f4f94fe221bbff0568",
            name:"choclate cake",
            desc:"sweet chocolate cake",
            price:"100",
            rating:""
        },
        {
            id:22,
            image:"https://img.freepik.com/premium-photo/delicious-tiramisu-cake-with-fresh-berries-mint-plate_78677-43.jpg?w=740",
            name:"tiramisu cake",
            desc:"delicious tiramisu cake with fresh berries and mint on a plate",
            price:"85",
            rating:""
        },
        {
            id:23,
            image:"https://img.freepik.com/premium-photo/chocolate-cookies-white-chocolate-chip-cookies-isolated_106006-1186.jpg?w=740",
            name:"chocolate cookies",
            desc:"chocolate cookies on white, chocolate chip cookies isolated",
            price:"20",
            rating:""
        },
        {
            id:24,
            image:"https://img.freepik.com/free-photo/cupcakes-decorated-whipped-cream-frozen-raspberries_114579-7878.jpg?w=740&t=st=1677320862~exp=1677321462~hmac=7cec6a42079ef0f87ce55d82b3a236162244ee056e0380e6b2757f914d83b612",
            name:"cupcakes",
            desc:"cupcakes decorated whipped cream and frozen raspberries",
            price:"44",
            rating:""
        },
        {
            id:25,
            image:"https://img.freepik.com/free-photo/delicious-close-up-muffin-with-chocolate-chips_23-2148238777.jpg?w=740&t=st=1677320964~exp=1677321564~hmac=ddf8dad9010c7a4d122027f690b81a2281ff85f18c6e2320a8220394d22e871c",
            name:"muffins",
            desc:"delicious close-up muffin with chocolate chips",
            price:"28",
            rating:""
        },
        {
            id:26,
            image:"https://img.freepik.com/premium-photo/turkish-delight_93675-32282.jpg?w=740",
            name:"turkish delight",
            desc:"Premium varieties consist largely of chopped dates, pistachios",
            price:"105",
            rating:""
        },
        {
            id:27,
            image:"https://img.freepik.com/premium-photo/colorful-candy_697356-4424.jpg?w=740",
            name:"candies",
            desc:"colorful candies",
            price:"12",
            rating:""
        },
        {
            id:28,
            image:"https://img.freepik.com/premium-photo/mousse-cold-whipping-cream_58830-586.jpg?w=740",
            name:"custard",
            desc:"mousse cold whipping cream",
            price:"55",
            rating:""
        },
        {
            id:29,
            image:"https://img.freepik.com/free-photo/raw-vegan-cake-with-lemon-lime-black-surface-covered-with-tiny-daisy-flowers_181624-18886.jpg?w=740&t=st=1677321320~exp=1677321920~hmac=fba9481c783c8fddf452da46e173d356a0aa80f8d0e58a0ab35eb1e5e3391e19",
            name:"vegan cake",
            desc:" raw vegan cake with lemon and lime on a black surface covered",
            price:"72",
            rating:""
        },
        {
            id:30,
            image:"https://img.freepik.com/premium-photo/dessert-snack-brownies-with-leaf_264726-257.jpg?w=740",
            name:"chocolate brownies",
            desc:"chocolate syrup poured over tower of chocolate nut brownies on tray",
            price:"65",
            rating:""
        },
        {
            id:31,
            image:"https://img.freepik.com/free-photo/iced-cocktails-drinking-glass-with-beach-sea_74190-7650.jpg?w=740&t=st=1677321620~exp=1677322220~hmac=1cceec3572281fc110ffe80eeb43d533c25947af2be0ebab503f8512a02e24b1",
            name:"cocktail",
            desc:"iced cocktails drinking glass with beach and sea",
            price:"17",
            rating:""
        },
        {
            id:32,
            image:"https://img.freepik.com/free-photo/top-view-fresh-delicious-fruit-juices-served-with-apple-feijoas-oranges-wooden-cutting-board_140725-94735.jpg?w=740&t=st=1677321663~exp=1677322263~hmac=dc2f52590bba26895063958c645717122210e407524f2d5413643d16aca2c108",
            name:"fresh juice",
            desc:"fresh delicious fruit juices served with apple and feijoas oranges",
            price:"20",
            rating:""
        },
        {
            id:33,
            image:"https://img.freepik.com/premium-photo/fruit-berry-healthy-fresh-smothie-plastic-cups-bright-background-colorful-diet-concept_265030-82.jpg?w=740",
            name:"fresh berry smoothie",
            desc:" fruit and berry healthy fresh smothie in plastic cups on bright background",
            price:"24",
            rating:""
        },
        {
            id:34,
            image:"https://img.freepik.com/free-photo/ayran-drink-with-mint-cucumber-glass-wooden-table_123827-21428.jpg?w=740&t=st=1677321839~exp=1677322439~hmac=32b2358d82cdd394c4df12d1df6959c55d59692b69be75dcd5211ef3404f10d0",
            name:"mint drink",
            desc:"ayran drink with mint and cucumber in glass on wooden table",
            price:"12",
            rating:""
        },
        {
            id:35,
            image:"https://img.freepik.com/free-photo/glass-with-yougurt-with-raspberry-table_23-2148579873.jpg?w=740&t=st=1677321883~exp=1677322483~hmac=44ebfdc4d764883d025859d03043a87175d7d6d55e43aa13f6224e7dac529cc1",
            name:"yogurt",
            desc:"glass with yougurt with raspberry on table",
            price:"36",
            rating:""
        },
        {
            id:36,
            image:"https://img.freepik.com/free-photo/strawberry-icecream_144627-19460.jpg?w=740&t=st=1677321941~exp=1677322541~hmac=e3880307fcd4bf707f1b5f9c4f3afb658d5817b0c85d05ca04a90a46d718b73b",
            name:"Ice cream",
            desc:"straw berry cone ice cream",
            price:"32",
            rating:""
        },
        {
            id:37,
            image:"https://img.freepik.com/free-photo/close-up-wine-pouring-into-glass_23-2147764869.jpg?w=740&t=st=1677322018~exp=1677322618~hmac=c80a7abea76ce260d3d246cd0b154a6d196ff9383f0eab7e28622dbbbaecddde",
            name:"wine",
            desc:"close-up wine pouring into glass",
            price:"263",
            rating:""
        },
        {
            id:38,
            image:"https://img.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg?w=740&t=st=1677322078~exp=1677322678~hmac=f3f9856e118ac40adc8978daf41ffd4def072abe59ec9755102d944be970b763",
            name:"beer",
            desc:"glass bottles of beer with glass and ice on dark background",
            price:"220",
            rating:""
        },
        {
            id:39,
            image:"https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?w=996&t=st=1677322143~exp=1677322743~hmac=8855071d7e4eba433fdc860c0443cb8c1bdaae8ed2a54998bea2a309f7f00d74",
            name:"cocktail mixes",
            desc:"selection of various cocktails on the table",
            price:"46",
            rating:""
        },
        {
            id:40,
            image:"https://img.freepik.com/free-photo/mojito-rum-cola-alochol-cocktail-served-highball-glasses_8353-6098.jpg?w=900&t=st=1677322186~exp=1677322786~hmac=12a86a2f2c76880eb019c6a12c513389b270cdc2697530ce9e7e02e9d3799519",
            name:"mojito",
            desc:"Mojito and rum and cola alochol cocktail served in highball glasses",
            price:"96",
            rating:""
        },
    ],
    dinner:[
        {
            id:1,
            image:"https://img.freepik.com/free-photo/murukku-also-known-as-chakli-south-indian-traditional-vegetarian-snack_466689-73243.jpg?t=st=1677318475~exp=1677319075~hmac=4bbbb99c6d0b5f7487051654946a21747b9d8ffc83273a5f9344a75871c0ec0d",
            name:"Murruku",
            desc:"known as chakli south indian traditional vegetarian snack",
            price:"250",
            rating:"https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
        },
        {
            id:2,
            image:"https://img.freepik.com/free-photo/homemade-wheat-tortillas-pita-bread-tortilla-pita-with-ingredients-cooking-white-table-top-view_127032-2505.jpg?w=740&t=st=1677318826~exp=1677319426~hmac=ed83878363af2d7058abfcf000a06cb53e358c0f001ee37d59f62e7dab1eab82",
            name:"Wheat Tortillas",
            desc:"homemade wheat tortillas pita bread tortilla pita with ingredients for cooking",
            price:"120",
            rating:""
        },
        {
            id:3,
            image:"https://img.freepik.com/free-photo/stock-photo-jalebi-jilbi-imarati-indian-sweet-food-fried-pure-ghee-selective-focus_466689-71704.jpg?t=st=1677318817~exp=1677319417~hmac=a4be1980a1a1e3184702907aff59f7ae9cada31b3310cc3ec425fcab404d59ff",
            name:"Jalebi",
            desc:" jalebi or jilbi or imarati, indian sweet food fried in pure ghee",
            price:"262",
            rating:""
        },
        {
            id:4,
            image:"https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?w=740&t=st=1677319005~exp=1677319605~hmac=cc73e589eeeab9736e1a15ef8b3f26ad30c1045ac7b5b13aca3e539271b4c781",
            name:"hawaiian pizza",
            desc:"Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple",
            price:"102",
            rating:""
        },
        {
            id:5,
            image:"https://img.freepik.com/free-photo/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table_1150-37858.jpg?w=740&t=st=1677319134~exp=1677319734~hmac=4690cd64171e9e24bc23f127fbe8f5ee955c1238e499cc0ecbc093938fb61486",
            name:"Grilled chicken",
            desc:"grilled chicken legs in barbecue sauce with pepper seeds parsley",
            price:"456",
            rating:""
        },
        {
            id:6,
            image:"https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=740&t=st=1677319197~exp=1677319797~hmac=59ca57eca0992d926f43922f406e3d18a324ee1d12f41731d6673518c3456c25",
            name:"Chicken wings",
            desc:" baked chicken wings in the asian style and tomatoes sauce",
            price:"369",
            rating:""
        },
        {
            id:7,
            image:"https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=740&t=st=1677319271~exp=1677319871~hmac=94cdf1f6095efd02ee66067bdd1f76801fa9ec4f7469e8264f5b353025b4d734",
            name:"Crispy chicken",
            desc:"crispy fried chicken on a plate with salad and carrot",
            price:"412",
            rating:""
        },
        {
            id:8,
            image:"https://img.freepik.com/free-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72651.jpg?t=st=1677319349~exp=1677319949~hmac=a1652ef26568eb885e27856ad3945017670b16134e78de0df7eadff3eda88e63",
            name:"Lamb biriyani",
            desc:"mutton or lamb biriyani with basmati rice, served in a bowl",
            price:"200",
            rating:""
        },
        {
            id:9,
            image:"https://img.freepik.com/free-photo/side-view-chicken-kebab-with-grilled-hot-green-pepper-tomato-pickled-cabbage-rice-pita_141793-4837.jpg?w=740&t=st=1677319433~exp=1677320033~hmac=5aef0a3a206053f090f3267232a83408c24d86a38c160a42c8e363b56ce87c4c",
            name:"chicken kebab",
            desc:"chicken kebab with grilled hot green pepper tomato pickled",
            price:"537",
            rating:""
        },
        {
            id:10,
            image:"https://img.freepik.com/free-photo/high-angle-pakistan-dish-arrangement_23-2148821521.jpg?w=740&t=st=1677319581~exp=1677320181~hmac=c716edccacf0b1dfd47a19cd309dca524e6a595ad4fcc1c858a69e1f9dd36905",
            name:"Pakistan dish",
            desc:"high angle pakistan dish arrangement",
            price:"",
            rating:""
        },
    ],
    lunch:[

        {
            id:11,
            image:"https://img.freepik.com/free-photo/bombay-mix-chanachur-chiwda-farsan-is-indian-snack-mix-popular-tea-time-food-from-india_466689-73401.jpg?t=st=1677319349~exp=1677319949~hmac=19b2b10935c53cfb5abb05835f8234d8e97567fe554d95576782ae0b06eab9ca",
            name:"popular indian chanachur",
            desc:"bombay mix or chanachur or chiwda or farsan is an indian snack mix",
            price:"212",
            rating:""
        },

        {
            id:12,
            image:"https://img.freepik.com/free-photo/fried-rice-with-sausage_1339-8075.jpg?w=740&t=st=1677319812~exp=1677320412~hmac=050f8916eb8447635482e46d2eac0d95c8570dd1bb1b705d14025cee1313842d",
            name:"Fried rice",
            desc:"fried rice with sausage",
            price:"106",
            rating:""
        },

        {
            id:13,
            image:"https://img.freepik.com/free-photo/curry-fried-rice_1339-1814.jpg?w=740&t=st=1677319867~exp=1677320467~hmac=ecbfbe0114573fae6e09fc103b9145e9f90a39fc874c2ad6b26492449e86cc61",
            name:"Curry rice",
            desc:"curry fried rice with cucumbers",
            price:"78",
            rating:""
        },

        {
            id:14,
            image:"https://img.freepik.com/free-photo/mutton-kheema-pav-indian-spicy-minced-meat-served-with-bread-kulcha-garnished-with-green-peas-moody-background-selective-focus_466689-74213.jpg?t=st=1677319926~exp=1677320526~hmac=a4de7c54607c767761d42fce12373ea4f91d31f4cfa21c015f0f8e8a865b6a13",
            name:"mutton kheema",
            desc:"mutton kheema pav or indian spicy minced meat served with bread",
            price:"106",
            rating:""
        },

        {
            id:15,
            image:"https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?w=740&t=st=1677320003~exp=1677320603~hmac=e68bb14074a71e3ed32fd2511d65d516d06155a9c457e103d7fb07df6356d42c",
            name:"Fish",
            desc:" delicious fish meal on tray",
            price:"99",
            rating:""
        },

        {
            id:16,
            image:"https://img.freepik.com/free-photo/dorada-baked-with-potatoes_2829-14161.jpg?w=740&t=st=1677320171~exp=1677320771~hmac=c32a51efddd6e7977f23b91fdb2548b92db81931651ffdf729cde67d213cffde",
            name:"Fish potatoes",
            desc:"fish baked with potatoes",
            price:"78",
            rating:""
        },

        {
            id:17,
            image:"https://img.freepik.com/free-photo/red-chicken-curry-murgh-masala-korma-with-prominent-leg-piece_466689-91746.jpg?t=st=1677319926~exp=1677320526~hmac=befe9b77d6a8c74d8aeab6634f215df157d311a0cd0575c0e86f872ffaf1a2c6",
            name:"Fried chicken",
            desc:"red chicken curry or murgh masala or korma with prominent leg piece",
            price:"355",
            rating:""
        },

        {
            id:18,
            image:"https://img.freepik.com/free-photo/side-view-fried-anchovy-with-red-onion-lettuce-slice-lemon-plate_141793-4902.jpg?w=740&t=st=1677320239~exp=1677320839~hmac=a8e3bc36269ee3981986713f20ef8dedec00bff48975f4d5de32f43592954688",
            name:"anchovy and onions",
            desc:" fried anchovy with red onion lettuce and slice of lemon",
            price:"55",
            rating:""
        },

        {
            id:19,
            image:"https://img.freepik.com/premium-photo/pieces-fried-fish-carp-ceramic-plate-dark-wooden-background_193819-3952.jpg?w=740",
            name:"Fried fish",
            desc:"pieces of fried fish (carp) on a ceramic plate",
            price:"150",
            rating:""
        },

        {
            id:20,
            image:"https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_2829-18668.jpg?w=740&t=st=1677320428~exp=1677321028~hmac=66d42115e55bed687b67359d6cff67a446bc266021a54dabe8cc5b2012a7ffe8",
            name:"beef stake",
            desc:"juicy steak medium rare beef with spices and grilled vegetables",
            price:"685",
            rating:""
        },
    ],
    dessert:[
        {
            id:21,
            image:"https://img.freepik.com/free-photo/front-view-sweet-chocolate-cake_23-2148834059.jpg?w=740&t=st=1677320608~exp=1677321208~hmac=62d030c6f854be820f279af720c7eef2d25656b0e9a792f4f94fe221bbff0568",
            name:"choclate cake",
            desc:"sweet chocolate cake",
            price:"100",
            rating:""
        },
        {
            id:22,
            image:"https://img.freepik.com/premium-photo/delicious-tiramisu-cake-with-fresh-berries-mint-plate_78677-43.jpg?w=740",
            name:"tiramisu cake",
            desc:"delicious tiramisu cake with fresh berries and mint on a plate",
            price:"85",
            rating:""
        },
        {
            id:23,
            image:"https://img.freepik.com/premium-photo/chocolate-cookies-white-chocolate-chip-cookies-isolated_106006-1186.jpg?w=740",
            name:"chocolate cookies",
            desc:"chocolate cookies on white, chocolate chip cookies isolated",
            price:"20",
            rating:""
        },
        {
            id:24,
            image:"https://img.freepik.com/free-photo/cupcakes-decorated-whipped-cream-frozen-raspberries_114579-7878.jpg?w=740&t=st=1677320862~exp=1677321462~hmac=7cec6a42079ef0f87ce55d82b3a236162244ee056e0380e6b2757f914d83b612",
            name:"cupcakes",
            desc:"cupcakes decorated whipped cream and frozen raspberries",
            price:"44",
            rating:""
        },
        {
            id:25,
            image:"https://img.freepik.com/free-photo/delicious-close-up-muffin-with-chocolate-chips_23-2148238777.jpg?w=740&t=st=1677320964~exp=1677321564~hmac=ddf8dad9010c7a4d122027f690b81a2281ff85f18c6e2320a8220394d22e871c",
            name:"muffins",
            desc:"delicious close-up muffin with chocolate chips",
            price:"28",
            rating:""
        },
        {
            id:26,
            image:"https://img.freepik.com/premium-photo/turkish-delight_93675-32282.jpg?w=740",
            name:"turkish delight",
            desc:"Premium varieties consist largely of chopped dates, pistachios",
            price:"105",
            rating:""
        },
        {
            id:27,
            image:"https://img.freepik.com/premium-photo/colorful-candy_697356-4424.jpg?w=740",
            name:"candies",
            desc:"colorful candies",
            price:"12",
            rating:""
        },
        {
            id:28,
            image:"https://img.freepik.com/premium-photo/mousse-cold-whipping-cream_58830-586.jpg?w=740",
            name:"custard",
            desc:"mousse cold whipping cream",
            price:"55",
            rating:""
        },
        {
            id:29,
            image:"https://img.freepik.com/free-photo/raw-vegan-cake-with-lemon-lime-black-surface-covered-with-tiny-daisy-flowers_181624-18886.jpg?w=740&t=st=1677321320~exp=1677321920~hmac=fba9481c783c8fddf452da46e173d356a0aa80f8d0e58a0ab35eb1e5e3391e19",
            name:"vegan cake",
            desc:" raw vegan cake with lemon and lime on a black surface covered",
            price:"72",
            rating:""
        },
        {
            id:30,
            image:"https://img.freepik.com/premium-photo/dessert-snack-brownies-with-leaf_264726-257.jpg?w=740",
            name:"chocolate brownies",
            desc:"chocolate syrup poured over tower of chocolate nut brownies on tray",
            price:"65",
            rating:""
        },
    ],
    drink:[
        {
            id:31,
            image:"https://img.freepik.com/free-photo/iced-cocktails-drinking-glass-with-beach-sea_74190-7650.jpg?w=740&t=st=1677321620~exp=1677322220~hmac=1cceec3572281fc110ffe80eeb43d533c25947af2be0ebab503f8512a02e24b1",
            name:"cocktail",
            desc:"iced cocktails drinking glass with beach and sea",
            price:"17",
            rating:""
        },
        {
            id:32,
            image:"https://img.freepik.com/free-photo/top-view-fresh-delicious-fruit-juices-served-with-apple-feijoas-oranges-wooden-cutting-board_140725-94735.jpg?w=740&t=st=1677321663~exp=1677322263~hmac=dc2f52590bba26895063958c645717122210e407524f2d5413643d16aca2c108",
            name:"fresh juice",
            desc:"fresh delicious fruit juices served with apple and feijoas oranges",
            price:"20",
            rating:""
        },
        {
            id:33,
            image:"https://img.freepik.com/premium-photo/fruit-berry-healthy-fresh-smothie-plastic-cups-bright-background-colorful-diet-concept_265030-82.jpg?w=740",
            name:"fresh berry smoothie",
            desc:" fruit and berry healthy fresh smothie in plastic cups on bright background",
            price:"24",
            rating:""
        },
        {
            id:34,
            image:"https://img.freepik.com/free-photo/ayran-drink-with-mint-cucumber-glass-wooden-table_123827-21428.jpg?w=740&t=st=1677321839~exp=1677322439~hmac=32b2358d82cdd394c4df12d1df6959c55d59692b69be75dcd5211ef3404f10d0",
            name:"mint drink",
            desc:"ayran drink with mint and cucumber in glass on wooden table",
            price:"12",
            rating:""
        },
        {
            id:35,
            image:"https://img.freepik.com/free-photo/glass-with-yougurt-with-raspberry-table_23-2148579873.jpg?w=740&t=st=1677321883~exp=1677322483~hmac=44ebfdc4d764883d025859d03043a87175d7d6d55e43aa13f6224e7dac529cc1",
            name:"yogurt",
            desc:"glass with yougurt with raspberry on table",
            price:"36",
            rating:""
        },
        {
            id:36,
            image:"https://img.freepik.com/free-photo/strawberry-icecream_144627-19460.jpg?w=740&t=st=1677321941~exp=1677322541~hmac=e3880307fcd4bf707f1b5f9c4f3afb658d5817b0c85d05ca04a90a46d718b73b",
            name:"Ice cream",
            desc:"straw berry cone ice cream",
            price:"32",
            rating:""
        },
        {
            id:37,
            image:"https://img.freepik.com/free-photo/close-up-wine-pouring-into-glass_23-2147764869.jpg?w=740&t=st=1677322018~exp=1677322618~hmac=c80a7abea76ce260d3d246cd0b154a6d196ff9383f0eab7e28622dbbbaecddde",
            name:"wine",
            desc:"close-up wine pouring into glass",
            price:"263",
            rating:""
        },
        {
            id:38,
            image:"https://img.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg?w=740&t=st=1677322078~exp=1677322678~hmac=f3f9856e118ac40adc8978daf41ffd4def072abe59ec9755102d944be970b763",
            name:"beer",
            desc:"glass bottles of beer with glass and ice on dark background",
            price:"220",
            rating:""
        },
        {
            id:39,
            image:"https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?w=996&t=st=1677322143~exp=1677322743~hmac=8855071d7e4eba433fdc860c0443cb8c1bdaae8ed2a54998bea2a309f7f00d74",
            name:"cocktail mixes",
            desc:"selection of various cocktails on the table",
            price:"46",
            rating:""
        },
        {
            id:40,
            image:"https://img.freepik.com/free-photo/mojito-rum-cola-alochol-cocktail-served-highball-glasses_8353-6098.jpg?w=900&t=st=1677322186~exp=1677322786~hmac=12a86a2f2c76880eb019c6a12c513389b270cdc2697530ce9e7e02e9d3799519",
            name:"mojito",
            desc:"Mojito and rum and cola alochol cocktail served in highball glasses",
            price:"96",
            rating:""
        },
    ],
}
export default data;