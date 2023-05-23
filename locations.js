var locations = [
    { name: 'Assis Brasil, AC', color: 'black', latitude: '-10.9298', longitude: '-69.5738' },
	{ name: 'Brasiléia, AC', color: 'black', latitude: '-10.995', longitude: '-68.7497' },
	{ name: 'Bujari, AC', color: 'black', latitude: '-9.81528', longitude: '-67.955' },
	{ name: 'Capixaba, AC', color: 'black', latitude: '-10.566', longitude: '-67.686' },
	{ name: 'Cruzeiro do Sul, AC', color: 'black', latitude: '-7.62762', longitude: '-72.6756' },
	{ name: 'Epitaciolândia, AC', color: 'black', latitude: '-11.0188', longitude: '-68.7341' },
	{ name: 'Feijó, AC', color: 'black', latitude: '-8.17054', longitude: '-70.351' },
	{ name: 'Jordão, AC', color: 'black', latitude: '-9.1908', longitude: '-71.9503' },
	{ name: 'Manoel Urbano, AC', color: 'black', latitude: '-8.83291', longitude: '-69.2679' },
	{ name: 'Marechal Thaumaturgo, AC', color: 'black', latitude: '-8.93898', longitude: '-72.7997' },
	{ name: 'Mâncio Lima, AC', color: 'black', latitude: '-7.61657', longitude: '-72.8997' },
	{ name: 'Plácido de Castro, AC', color: 'black', latitude: '-10.2806', longitude: '-67.1371' },
	{ name: 'Porto Acre, AC', color: 'black', latitude: '-9.58138', longitude: '-67.5478' },
	{ name: 'Porto Walter, AC', color: 'black', latitude: '-8.26323', longitude: '-72.7537' },
	{ name: 'Rio Branco, AC', color: 'yellow', latitude: '-9.97499', longitude: '-67.8243' },
	{ name: 'Rodrigues Alves, AC', color: 'black', latitude: '-7.73864', longitude: '-72.661' },
	{ name: 'Santa Rosa do Purus, AC', color: 'black', latitude: '-9.44652', longitude: '-70.4902' },
	{ name: 'Sena Madureira, AC', color: 'black', latitude: '-9.06596', longitude: '-68.6571' },
	{ name: 'Senador Guiomard, AC', color: 'black', latitude: '-10.1497', longitude: '-67.7362' },
	{ name: 'Tarauacá, AC', color: 'black', latitude: '-8.15697', longitude: '-70.7722' },
	{ name: 'Xapuri, AC', color: 'black', latitude: '-10.6516', longitude: '-68.4969' },
	{ name: 'Alvarães, AM', color: 'black', latitude: '-3.22727', longitude: '-64.8007' },
	{ name: 'Amaturá, AM', color: 'black', latitude: '-3.37455', longitude: '-68.2005' },
	{ name: 'Anamã, AM', color: 'black', latitude: '-3.56697', longitude: '-61.3963' },
	{ name: 'Anori, AM', color: 'black', latitude: '-3.74603', longitude: '-61.6575' },
	{ name: 'Apuí, AM', color: 'black', latitude: '-7.19409', longitude: '-59.896' },
	{ name: 'Atalaia do Norte, AM', color: 'black', latitude: '-4.37055', longitude: '-70.1967' },
	{ name: 'Autazes, AM', color: 'black', latitude: '-3.58574', longitude: '-59.1256' },
	{ name: 'Barcelos, AM', color: 'black', latitude: '-0.983373', longitude: '-62.9311' },
	{ name: 'Barreirinha, AM', color: 'black', latitude: '-2.79886', longitude: '-57.0679' },
	{ name: 'Benjamin Constant, AM', color: 'black', latitude: '-4.37768', longitude: '-70.0342' },
	{ name: 'Beruri, AM', color: 'black', latitude: '-3.89874', longitude: '-61.3616' },
	{ name: 'Boa Vista do Ramos, AM', color: 'black', latitude: '-2.97409', longitude: '-57.5873' },
	{ name: 'Boca do Acre, AM', color: 'black', latitude: '-8.74232', longitude: '-67.3919' },
	{ name: 'Borba, AM', color: 'black', latitude: '-4.39154', longitude: '-59.5874' },
	{ name: 'Caapiranga, AM', color: 'black', latitude: '-3.31537', longitude: '-61.2206' },
	{ name: 'Canutama, AM', color: 'black', latitude: '-6.52582', longitude: '-64.3953' },
	{ name: 'Carauari, AM', color: 'black', latitude: '-4.88161', longitude: '-66.9086' },
	{ name: 'Careiro da Várzea, AM', color: 'black', latitude: '-3.314', longitude: '-59.5557' },
	{ name: 'Careiro, AM', color: 'black', latitude: '-3.76803', longitude: '-60.369' },
	{ name: 'Coari, AM', color: 'black', latitude: '-4.09412', longitude: '-63.1441' },
	{ name: 'Codajás, AM', color: 'black', latitude: '-3.83053', longitude: '-62.0658' },
	{ name: 'Eirunepé, AM', color: 'black', latitude: '-6.65677', longitude: '-69.8662' },
	{ name: 'Envira, AM', color: 'black', latitude: '-7.43789', longitude: '-70.0281' },
	{ name: 'Fonte Boa, AM', color: 'black', latitude: '-2.52342', longitude: '-66.0942' },
	{ name: 'Guajará, AM', color: 'black', latitude: '-7.53797', longitude: '-72.5907' },
	{ name: 'Humaitá, AM', color: 'black', latitude: '-7.51171', longitude: '-63.0327' },
	{ name: 'Ipixuna, AM', color: 'black', latitude: '-7.04791', longitude: '-71.6934' },
	{ name: 'Iranduba, AM', color: 'black', latitude: '-3.27479', longitude: '-60.19' },
	{ name: 'Itacoatiara, AM', color: 'black', latitude: '-3.13861', longitude: '-58.4449' },
	{ name: 'Itamarati, AM', color: 'black', latitude: '-6.43852', longitude: '-68.2437' },
	{ name: 'Japurá, AM', color: 'black', latitude: '-1.88237', longitude: '-66.9291' },
	{ name: 'Juruá, AM', color: 'black', latitude: '-3.48438', longitude: '-66.0718' },
	{ name: 'Jutaí, AM', color: 'black', latitude: '-2.75814', longitude: '-66.7595' },
	{ name: 'Lábrea, AM', color: 'black', latitude: '-7.26413', longitude: '-64.7948' },
	{ name: 'Manacapuru, AM', color: 'black', latitude: '-3.29066', longitude: '-60.6216' },
	{ name: 'Manaquiri, AM', color: 'black', latitude: '-3.44078', longitude: '-60.4612' },
	{ name: 'Manaus, AM', color: 'yellow', latitude: '-3.11866', longitude: '-60.0212' },
	{ name: 'Manicoré, AM', color: 'black', latitude: '-5.80462', longitude: '-61.2895' },
	{ name: 'Maraã, AM', color: 'black', latitude: '-1.85313', longitude: '-65.573' },
	{ name: 'Maués, AM', color: 'black', latitude: '-3.39289', longitude: '-57.7067' },
	{ name: 'Nhamundá, AM', color: 'black', latitude: '-2.20793', longitude: '-56.7112' },
	{ name: 'Nova Olinda do Norte, AM', color: 'black', latitude: '-3.90037', longitude: '-59.094' },
	{ name: 'Novo Airão, AM', color: 'black', latitude: '-2.63637', longitude: '-60.9434' },
	{ name: 'Novo Aripuanã, AM', color: 'black', latitude: '-5.12593', longitude: '-60.3732' },
	{ name: 'Parintins, AM', color: 'black', latitude: '-2.63741', longitude: '-56.729' },
	{ name: 'Pauini, AM', color: 'black', latitude: '-7.71311', longitude: '-66.992' },
	{ name: 'Presidente Figueiredo, AM', color: 'black', latitude: '-2.02981', longitude: '-60.0234' },
	{ name: 'Rio Preto da Eva, AM', color: 'black', latitude: '-2.7045', longitude: '-59.6858' },
	{ name: 'Santa Isabel do Rio Negro, AM', color: 'black', latitude: '-0.410824', longitude: '-65.0092' },
	{ name: 'Santo Antônio do Içá, AM', color: 'black', latitude: '-3.09544', longitude: '-67.9463' },
	{ name: 'Silves, AM', color: 'black', latitude: '-2.81748', longitude: '-58.248' },
	{ name: 'São Gabriel da Cachoeira, AM', color: 'black', latitude: '-0.11909', longitude: '-67.084' },
	{ name: 'São Paulo de Olivença, AM', color: 'black', latitude: '-3.47292', longitude: '-68.9646' },
	{ name: 'São Sebastião do Uatumã, AM', color: 'black', latitude: '-2.55915', longitude: '-57.8731' },
	{ name: 'Tabatinga, AM', color: 'black', latitude: '-4.2416', longitude: '-69.9383' },
	{ name: 'Tapauá, AM', color: 'black', latitude: '-5.62085', longitude: '-63.1808' },
	{ name: 'Tefé, AM', color: 'black', latitude: '-3.36822', longitude: '-64.7193' },
	{ name: 'Tonantins, AM', color: 'black', latitude: '-2.86582', longitude: '-67.7919' },
	{ name: 'Uarini, AM', color: 'black', latitude: '-2.99609', longitude: '-65.1133' },
	{ name: 'Urucará, AM', color: 'black', latitude: '-2.52936', longitude: '-57.7538' },
	{ name: 'Urucurituba, AM', color: 'black', latitude: '-3.12841', longitude: '-58.1496' },
	{ name: 'Amapá, AP', color: 'black', latitude: '2.05267', longitude: '-50.7957' },
	{ name: 'Calçoene, AP', color: 'black', latitude: '2.50475', longitude: '-50.9512' },
	{ name: 'Cutias, AP', color: 'black', latitude: '0.970761', longitude: '-50.8005' },
	{ name: 'Ferreira Gomes, AP', color: 'black', latitude: '0.857256', longitude: '-51.1795' },
	{ name: 'Itaubal, AP', color: 'black', latitude: '0.602185', longitude: '-50.6996' },
	{ name: 'Laranjal do Jari, AP', color: 'black', latitude: '-0.804911', longitude: '-52.453' },
	{ name: 'Macapá, AP', color: 'green', latitude: '0.034934', longitude: '-51.0694' },
	{ name: 'Mazagão, AP', color: 'black', latitude: '-0.11336', longitude: '-51.2891' },
	{ name: 'Oiapoque, AP', color: 'black', latitude: '3.84074', longitude: '-51.8331' },
	{ name: 'Pedra Branca do Amapari, AP', color: 'black', latitude: '0.777424', longitude: '-51.9503' },
	{ name: 'Porto Grande, AP', color: 'black', latitude: '0.71243', longitude: '-51.4155' },
	{ name: 'Pracuúba, AP', color: 'black', latitude: '1.74543', longitude: '-50.7892' },
	{ name: 'Santana, AP', color: 'green', latitude: '-0.045434', longitude: '-51.1729' },
	{ name: 'Serra do Navio, AP', color: 'black', latitude: '0.901357', longitude: '-52.0036' },
	{ name: 'Tartarugalzinho, AP', color: 'black', latitude: '1.50652', longitude: '-50.9087' },
	{ name: 'Vitória do Jari, AP', color: 'black', latitude: '-0.938', longitude: '-52.424' },
	{ name: 'Abaetetuba, PA', color: 'black', latitude: '-1.72183', longitude: '-48.8788' },
	{ name: 'Abel Figueiredo, PA', color: 'black', latitude: '-4.95333', longitude: '-48.3933' },
	{ name: 'Acará, PA', color: 'black', latitude: '-1.95383', longitude: '-48.1985' },
	{ name: 'Afuá, PA', color: 'black', latitude: '-0.154874', longitude: '-50.3861' },
	{ name: 'Alenquer, PA', color: 'black', latitude: '-1.94623', longitude: '-54.7384' },
	{ name: 'Almeirim, PA', color: 'black', latitude: '-1.52904', longitude: '-52.5788' },
	{ name: 'Altamira, PA', color: 'black', latitude: '-3.20407', longitude: '-52.21' },
	{ name: 'Anajás, PA', color: 'black', latitude: '-0.996811', longitude: '-49.9354' },
	{ name: 'Ananindeua, PA', color: 'yellow', latitude: '-1.36391', longitude: '-48.3743' },
	{ name: 'Anapu, PA', color: 'black', latitude: '-3.46985', longitude: '-51.2003' },
	{ name: 'Augusto Corrêa, PA', color: 'black', latitude: '-1.05109', longitude: '-46.6147' },
	{ name: 'Aurora do Pará, PA', color: 'black', latitude: '-2.14898', longitude: '-47.5677' },
	{ name: 'Aveiro, PA', color: 'black', latitude: '-3.60841', longitude: '-55.3199' },
	{ name: 'Bagre, PA', color: 'black', latitude: '-1.90057', longitude: '-50.1987' },
	{ name: 'Baião, PA', color: 'black', latitude: '-2.79021', longitude: '-49.6694' },
	{ name: 'Bannach, PA', color: 'black', latitude: '-7.34779', longitude: '-50.3959' },
	{ name: 'Barcarena, PA', color: 'black', latitude: '-1.51187', longitude: '-48.6195' },
	{ name: 'Belterra, PA', color: 'black', latitude: '-2.63609', longitude: '-54.9374' },
	{ name: 'Benevides, PA', color: 'black', latitude: '-1.36183', longitude: '-48.2434' },
	{ name: 'Bragança, PA', color: 'black', latitude: '-1.06126', longitude: '-46.7826' },
	{ name: 'Brasil Novo, PA', color: 'black', latitude: '-3.29792', longitude: '-52.534' },
	{ name: 'Brejo Grande do Araguaia, PA', color: 'black', latitude: '-5.69822', longitude: '-48.4103' },
	{ name: 'Breu Branco, PA', color: 'black', latitude: '-3.77191', longitude: '-49.5735' },
	{ name: 'Breves, PA', color: 'black', latitude: '-1.68036', longitude: '-50.4791' },
	{ name: 'Bujaru, PA', color: 'black', latitude: '-1.51762', longitude: '-48.0381' },
	{ name: 'Cachoeira do Arari, PA', color: 'black', latitude: '-1.01226', longitude: '-48.9503' },
	{ name: 'Cachoeira do Piriá, PA', color: 'black', latitude: '-1.75974', longitude: '-46.5459' },
	{ name: 'Cametá, PA', color: 'black', latitude: '-2.24295', longitude: '-49.4979' },
	{ name: 'Capitão Poço, PA', color: 'black', latitude: '-1.74785', longitude: '-47.0629' },
	{ name: 'Castanhal, PA', color: 'green', latitude: '-1.29797', longitude: '-47.9167' },
	{ name: 'Chaves, PA', color: 'black', latitude: '-0.164154', longitude: '-49.987' },
	{ name: 'Colares, PA', color: 'black', latitude: '-0.936423', longitude: '-48.2803' },
	{ name: 'Conceição do Araguaia, PA', color: 'black', latitude: '-8.26136', longitude: '-49.2689' },
	{ name: 'Concórdia do Pará, PA', color: 'black', latitude: '-1.99238', longitude: '-47.9422' },
	{ name: 'Cumaru do Norte, PA', color: 'black', latitude: '-7.81097', longitude: '-50.7698' },
	{ name: 'Curionópolis, PA', color: 'black', latitude: '-6.09965', longitude: '-49.6068' },
	{ name: 'Curralinho, PA', color: 'black', latitude: '-1.81179', longitude: '-49.7952' },
	{ name: 'Curuá, PA', color: 'black', latitude: '-1.88775', longitude: '-55.1168' },
	{ name: 'Curuçá, PA', color: 'black', latitude: '-0.733214', longitude: '-47.8515' },
	{ name: 'Dom Eliseu, PA', color: 'black', latitude: '-4.19944', longitude: '-47.8245' },
	{ name: 'Faro, PA', color: 'black', latitude: '-2.16805', longitude: '-56.7405' },
	{ name: 'Floresta do Araguaia, PA', color: 'black', latitude: '-7.55335', longitude: '-49.7125' },
	{ name: 'Garrafão do Norte, PA', color: 'black', latitude: '-1.92986', longitude: '-47.0505' },
	{ name: 'Goianésia do Pará, PA', color: 'black', latitude: '-3.84338', longitude: '-49.0974' },
	{ name: 'Gurupá, PA', color: 'black', latitude: '-1.41412', longitude: '-51.6338' },
	{ name: 'Inhangapi, PA', color: 'black', latitude: '-1.4349', longitude: '-47.9114' },
	{ name: 'Ipixuna do Pará, PA', color: 'black', latitude: '-2.55992', longitude: '-47.5059' },
	{ name: 'Irituia, PA', color: 'black', latitude: '-1.76984', longitude: '-47.446' },
	{ name: 'Itaituba, PA', color: 'black', latitude: '-4.2667', longitude: '-55.9926' },
	{ name: 'Itupiranga, PA', color: 'black', latitude: '-5.13272', longitude: '-49.3358' },
	{ name: 'Jacareacanga, PA', color: 'black', latitude: '-6.21469', longitude: '-57.7544' },
	{ name: 'Jacundá, PA', color: 'black', latitude: '-4.44617', longitude: '-49.1153' },
	{ name: 'Juruti, PA', color: 'black', latitude: '-2.16347', longitude: '-56.0889' },
	{ name: 'Limoeiro do Ajuru, PA', color: 'black', latitude: '-1.8985', longitude: '-49.3903' },
	{ name: 'Magalhães Barata, PA', color: 'black', latitude: '-0.803391', longitude: '-47.6014' },
	{ name: 'Marabá, PA', color: 'green', latitude: '-5.38075', longitude: '-49.1327' },
	{ name: 'Maracanã, PA', color: 'black', latitude: '-0.778899', longitude: '-47.452' },
	{ name: 'Marapanim, PA', color: 'black', latitude: '-0.714702', longitude: '-47.7034' },
	{ name: 'Marituba, PA', color: 'black', latitude: '-1.36002', longitude: '-48.3421' },
	{ name: 'Medicilândia, PA', color: 'black', latitude: '-3.44637', longitude: '-52.8875' },
	{ name: 'Melgaço, PA', color: 'black', latitude: '-1.8032', longitude: '-50.7149' },
	{ name: 'Mocajuba, PA', color: 'black', latitude: '-2.5831', longitude: '-49.5042' },
	{ name: 'Moju, PA', color: 'black', latitude: '-1.88993', longitude: '-48.7668' },
	{ name: 'Mojuí dos Campos, PA', color: 'black', latitude: '-2.6822', longitude: '-54.6425' },
	{ name: 'Muaná, PA', color: 'black', latitude: '-1.53936', longitude: '-49.2224' },
	{ name: 'Mãe do Rio, PA', color: 'black', latitude: '-2.05683', longitude: '-47.5601' },
	{ name: 'Nova Esperança do Piriá, PA', color: 'black', latitude: '-2.26693', longitude: '-46.9731' },
	{ name: 'Nova Ipixuna, PA', color: 'black', latitude: '-4.91622', longitude: '-49.0822' },
	{ name: 'Nova Timboteua, PA', color: 'black', latitude: '-1.20874', longitude: '-47.3921' },
	{ name: 'Novo Progresso, PA', color: 'black', latitude: '-7.14347', longitude: '-55.3786' },
	{ name: 'Novo Repartimento, PA', color: 'black', latitude: '-4.24749', longitude: '-49.9499' },
	{ name: 'Oeiras do Pará, PA', color: 'black', latitude: '-2.00358', longitude: '-49.8628' },
	{ name: 'Oriximiná, PA', color: 'black', latitude: '-1.75989', longitude: '-55.8579' },
	{ name: 'Ourilândia do Norte, PA', color: 'black', latitude: '-6.7529', longitude: '-51.0858' },
	{ name: 'Ourém, PA', color: 'black', latitude: '-1.54168', longitude: '-47.1126' },
	{ name: 'Pacajá, PA', color: 'black', latitude: '-3.83542', longitude: '-50.6399' },
	{ name: 'Palestina do Pará, PA', color: 'black', latitude: '-5.74027', longitude: '-48.3181' },
	{ name: 'Paragominas, PA', color: 'green', latitude: '-3.00212', longitude: '-47.3527' },
	{ name: 'Parauapebas, PA', color: 'green', latitude: '-6.06781', longitude: '-49.9037' },
	{ name: 'Piçarra, PA', color: 'black', latitude: '-6.43778', longitude: '-48.8716' },
	{ name: 'Placas, PA', color: 'black', latitude: '-3.86813', longitude: '-54.2124' },
	{ name: 'Ponta de Pedras, PA', color: 'black', latitude: '-1.39587', longitude: '-48.8661' },
	{ name: 'Portel, PA', color: 'black', latitude: '-1.93639', longitude: '-50.8194' },
	{ name: 'Porto de Moz, PA', color: 'black', latitude: '-1.74691', longitude: '-52.2361' },
	{ name: 'Prainha, PA', color: 'black', latitude: '-1.798', longitude: '-53.4779' },
	{ name: 'Primavera, PA', color: 'black', latitude: '-0.945439', longitude: '-47.1253' },
	{ name: 'Quatipuru, PA', color: 'black', latitude: '-0.899604', longitude: '-47.0134' },
	{ name: 'Rio Maria, PA', color: 'black', latitude: '-7.31236', longitude: '-50.0379' },
	{ name: 'Rondon do Pará, PA', color: 'black', latitude: '-4.77793', longitude: '-48.067' },
	{ name: 'Rurópolis, PA', color: 'black', latitude: '-4.10028', longitude: '-54.9092' },
	{ name: 'Salinópolis, PA', color: 'black', latitude: '-0.630815', longitude: '-47.3465' },
	{ name: 'Salvaterra, PA', color: 'black', latitude: '-0.758444', longitude: '-48.5139' },
	{ name: 'Santa Bárbara do Pará, PA', color: 'black', latitude: '-1.19219', longitude: '-48.238' },
	{ name: 'Santa Cruz do Arari, PA', color: 'black', latitude: '-0.661019', longitude: '-49.1771' },
	{ name: 'Santa Luzia do Pará, PA', color: 'black', latitude: '-1.52147', longitude: '-46.9008' },
	{ name: 'Santa Maria do Pará, PA', color: 'black', latitude: '-1.35392', longitude: '-47.5712' },
	{ name: 'Santana do Araguaia, PA', color: 'black', latitude: '-9.3281', longitude: '-50.35' },
	{ name: 'Santarém Novo, PA', color: 'black', latitude: '-0.93097', longitude: '-47.3855' },
	{ name: 'Santarém, PA', color: 'black', latitude: '-2.43849', longitude: '-54.6996' },
	{ name: 'Santo Antônio do Tauá, PA', color: 'black', latitude: '-1.1522', longitude: '-48.1314' },
	{ name: 'Senador José Porfírio, PA', color: 'black', latitude: '-4.31242', longitude: '-51.5764' },
	{ name: 'Soure, PA', color: 'black', latitude: '-0.73032', longitude: '-48.5015' },
	{ name: 'São Caetano de Odivelas, PA', color: 'black', latitude: '-0.747293', longitude: '-48.0246' },
	{ name: 'São Domingos do Araguaia, PA', color: 'black', latitude: '-5.53732', longitude: '-48.7366' },
	{ name: 'São Domingos do Capim, PA', color: 'black', latitude: '-1.68768', longitude: '-47.7665' },
	{ name: 'São Francisco do Pará, PA', color: 'black', latitude: '-1.16963', longitude: '-47.7917' },
	{ name: 'São Félix do Xingu, PA', color: 'black', latitude: '-6.64254', longitude: '-51.9904' },
	{ name: 'São Geraldo do Araguaia, PA', color: 'black', latitude: '-6.39471', longitude: '-48.5592' },
	{ name: 'São João da Ponta, PA', color: 'black', latitude: '-0.857885', longitude: '-47.918' },
	{ name: 'São João de Pirabas, PA', color: 'black', latitude: '-0.780222', longitude: '-47.181' },
	{ name: 'São João do Araguaia, PA', color: 'black', latitude: '-5.36334', longitude: '-48.7926' },
	{ name: 'São Miguel do Guamá, PA', color: 'black', latitude: '-1.61307', longitude: '-47.4784' },
	{ name: 'São Sebastião da Boa Vista, PA', color: 'black', latitude: '-1.71597', longitude: '-49.5249' },
	{ name: 'Tailândia, PA', color: 'black', latitude: '-2.94584', longitude: '-48.9489' },
	{ name: 'Terra Alta, PA', color: 'black', latitude: '-1.02963', longitude: '-47.9004' },
	{ name: 'Terra Santa, PA', color: 'black', latitude: '-2.10443', longitude: '-56.4877' },
	{ name: 'Tracuateua, PA', color: 'black', latitude: '-1.07653', longitude: '-46.9031' },
	{ name: 'Trairão, PA', color: 'black', latitude: '-4.57347', longitude: '-55.9429' },
	{ name: 'Tucumã, PA', color: 'black', latitude: '-6.74687', longitude: '-51.1626' },
	{ name: 'Tucuruí, PA', color: 'black', latitude: '-3.7657', longitude: '-49.6773' },
	{ name: 'Ulianópolis, PA', color: 'black', latitude: '-3.75007', longitude: '-47.4892' },
	{ name: 'Uruará, PA', color: 'black', latitude: '-3.71519', longitude: '-53.7396' },
	{ name: 'Vigia, PA', color: 'black', latitude: '-0.861194', longitude: '-48.1386' },
	{ name: 'Viseu, PA', color: 'black', latitude: '-1.19124', longitude: '-46.1399' },
	{ name: 'Vitória do Xingu, PA', color: 'black', latitude: '-2.87922', longitude: '-52.0088' },
	{ name: 'Xinguara, PA', color: 'black', latitude: '-7.0983', longitude: '-49.9437' },
	{ name: 'Água Azul do Norte, PA', color: 'black', latitude: '-6.79053', longitude: '-50.4791' },
	{ name: 'Óbidos, PA', color: 'black', latitude: '-1.90107', longitude: '-55.5208' },
	{ name: 'Alto Paraíso, RO', color: 'black', latitude: '-9.71429', longitude: '-63.3188' },
	{ name: 'Ariquemes, RO', color: 'green', latitude: '-9.90571', longitude: '-63.0325' },
	{ name: 'Cabixi, RO', color: 'black', latitude: '-13.4945', longitude: '-60.552' },
	{ name: 'Cacaulândia, RO', color: 'black', latitude: '-10.349', longitude: '-62.9043' },
	{ name: 'Cacoal, RO', color: 'green', latitude: '-11.4343', longitude: '-61.4562' },
	{ name: 'Campo Novo de Rondônia, RO', color: 'black', latitude: '-10.5712', longitude: '-63.6266' },
	{ name: 'Candeias do Jamari, RO', color: 'black', latitude: '-8.7907', longitude: '-63.7005' },
	{ name: 'Castanheiras, RO', color: 'black', latitude: '-11.4253', longitude: '-61.9482' },
	{ name: 'Cerejeiras, RO', color: 'black', latitude: '-13.187', longitude: '-60.8168' },
	{ name: 'Chupinguaia, RO', color: 'black', latitude: '-12.5611', longitude: '-60.8877' },
	{ name: 'Colorado do Oeste, RO', color: 'black', latitude: '-13.1174', longitude: '-60.5454' },
	{ name: 'Corumbiara, RO', color: 'black', latitude: '-12.9551', longitude: '-60.8947' },
	{ name: 'Costa Marques, RO', color: 'black', latitude: '-12.4367', longitude: '-64.228' },
	{ name: 'Cujubim, RO', color: 'black', latitude: '-9.36065', longitude: '-62.5846' },
	{ name: 'Governador Jorge Teixeira, RO', color: 'black', latitude: '-10.61', longitude: '-62.7371' },
	{ name: 'Itapuã do Oeste, RO', color: 'black', latitude: '-9.19687', longitude: '-63.1809' },
	{ name: 'Jaru, RO', color: 'black', latitude: '-10.4318', longitude: '-62.4788' },
	{ name: 'Ministro Andreazza, RO', color: 'black', latitude: '-11.196', longitude: '-61.5174' },
	{ name: 'Mirante da Serra, RO', color: 'black', latitude: '-11.029', longitude: '-62.6696' },
	{ name: 'Monte Negro, RO', color: 'black', latitude: '-10.2458', longitude: '-63.29' },
	{ name: 'Nova Mamoré, RO', color: 'black', latitude: '-10.4077', longitude: '-65.3346' },
	{ name: 'Nova União, RO', color: 'black', latitude: '-10.9068', longitude: '-62.5564' },
	{ name: 'Novo Horizonte do Oeste, RO', color: 'black', latitude: '-11.6961', longitude: '-61.9951' },
	{ name: 'Ouro Preto do Oeste, RO', color: 'black', latitude: '-10.7167', longitude: '-62.2565' },
	{ name: 'Parecis, RO', color: 'black', latitude: '-12.1754', longitude: '-61.6032' },
	{ name: 'Pimenta Bueno, RO', color: 'black', latitude: '-11.672', longitude: '-61.198' },
	{ name: 'Pimenteiras do Oeste, RO', color: 'black', latitude: '-13.4823', longitude: '-61.0471' },
	{ name: 'Porto Velho, RO', color: 'yellow', latitude: '-8.76077', longitude: '-63.8999' },
	{ name: 'Primavera de Rondônia, RO', color: 'black', latitude: '-11.8295', longitude: '-61.3153' },
	{ name: 'Rio Crespo, RO', color: 'black', latitude: '-9.69965', longitude: '-62.9011' },
	{ name: 'Rolim de Moura, RO', color: 'black', latitude: '-11.7271', longitude: '-61.7714' },
	{ name: 'Seringueiras, RO', color: 'black', latitude: '-11.8055', longitude: '-63.0182' },
	{ name: 'São Francisco do Guaporé, RO', color: 'black', latitude: '-12.052', longitude: '-63.568' },
	{ name: 'São Miguel do Guaporé, RO', color: 'black', latitude: '-11.6953', longitude: '-62.7192' },
	{ name: 'Teixeirópolis, RO', color: 'black', latitude: '-10.9056', longitude: '-62.242' },
	{ name: 'Theobroma, RO', color: 'black', latitude: '-10.2483', longitude: '-62.3538' },
	{ name: 'Urupá, RO', color: 'black', latitude: '-11.1261', longitude: '-62.3639' },
	{ name: 'Vale do Anari, RO', color: 'black', latitude: '-9.86215', longitude: '-62.1876' },
	{ name: 'Vale do Paraíso, RO', color: 'black', latitude: '-10.4465', longitude: '-62.1352' },
	{ name: 'Vilhena, RO', color: 'green', latitude: '-12.7502', longitude: '-60.1488' },
	{ name: 'Amajari, RR', color: 'black', latitude: '3.64571', longitude: '-61.3692' },
	{ name: 'Cantá, RR', color: 'black', latitude: '2.60994', longitude: '-60.6058' },
	{ name: 'Caracaraí, RR', color: 'black', latitude: '1.82766', longitude: '-61.1304' },
	{ name: 'Caroebe, RR', color: 'black', latitude: '0.884203', longitude: '-59.6959' },
	{ name: 'Mucajaí, RR', color: 'black', latitude: '2.43998', longitude: '-60.9096' },
	{ name: 'Normandia, RR', color: 'black', latitude: '3.8853', longitude: '-59.6204' },
	{ name: 'Pacaraima, RR', color: 'black', latitude: '4.4799', longitude: '-61.1477' },
	{ name: 'Rorainópolis, RR', color: 'black', latitude: '0.939956', longitude: '-60.4389' },
	{ name: 'São João da Baliza, RR', color: 'black', latitude: '0.951659', longitude: '-59.9133' },
	{ name: 'São Luiz, RR', color: 'black', latitude: '1.01019', longitude: '-60.0419' },
	{ name: 'Uiramutã, RR', color: 'black', latitude: '4.60314', longitude: '-60.1815' },
	{ name: 'Abreulândia, TO', color: 'black', latitude: '-9.62101', longitude: '-49.1518' },
	{ name: 'Aguiarnópolis, TO', color: 'black', latitude: '-6.55409', longitude: '-47.4702' },
	{ name: 'Aliança do Tocantins, TO', color: 'black', latitude: '-11.3056', longitude: '-48.9361' },
	{ name: 'Almas, TO', color: 'black', latitude: '-11.5706', longitude: '-47.1792' },
	{ name: 'Ananás, TO', color: 'black', latitude: '-6.36437', longitude: '-48.0735' },
	{ name: 'Angico, TO', color: 'black', latitude: '-6.39179', longitude: '-47.8611' },
	{ name: 'Aparecida do Rio Negro, TO', color: 'black', latitude: '-9.94139', longitude: '-47.9638' },
	{ name: 'Aragominas, TO', color: 'black', latitude: '-7.16005', longitude: '-48.5291' },
	{ name: 'Araguacema, TO', color: 'black', latitude: '-8.80755', longitude: '-49.5569' },
	{ name: 'Araguatins, TO', color: 'black', latitude: '-5.64659', longitude: '-48.1232' },
	{ name: 'Araguaçu, TO', color: 'black', latitude: '-12.9289', longitude: '-49.8231' },
	{ name: 'Araguaína, TO', color: 'black', latitude: '-7.19238', longitude: '-48.2044' },
	{ name: 'Arapoema, TO', color: 'black', latitude: '-7.65463', longitude: '-49.0637' },
	{ name: 'Arraias, TO', color: 'black', latitude: '-12.9287', longitude: '-46.9359' },
	{ name: 'Augustinópolis, TO', color: 'black', latitude: '-5.46863', longitude: '-47.8863' },
	{ name: 'Aurora do Tocantins, TO', color: 'black', latitude: '-12.7105', longitude: '-46.4076' },
	{ name: 'Axixá do Tocantins, TO', color: 'black', latitude: '-5.61275', longitude: '-47.7701' },
	{ name: 'Babaçulândia, TO', color: 'black', latitude: '-7.20923', longitude: '-47.7613' },
	{ name: 'Bandeirantes do Tocantins, TO', color: 'black', latitude: '-7.75612', longitude: '-48.5836' },
	{ name: 'Barra do Ouro, TO', color: 'black', latitude: '-7.69593', longitude: '-47.6776' },
	{ name: 'Barrolândia, TO', color: 'black', latitude: '-9.83404', longitude: '-48.7252' },
	{ name: 'Bernardo Sayão, TO', color: 'black', latitude: '-7.87481', longitude: '-48.8893' },
	{ name: 'Bom Jesus do Tocantins, TO', color: 'black', latitude: '-8.96306', longitude: '-48.165' },
	{ name: 'Brasilândia do Tocantins, TO', color: 'black', latitude: '-8.38918', longitude: '-48.4822' },
	{ name: 'Brejinho de Nazaré, TO', color: 'black', latitude: '-11.0058', longitude: '-48.5683' },
	{ name: 'Buriti do Tocantins, TO', color: 'black', latitude: '-5.31448', longitude: '-48.2271' },
	{ name: 'Campos Lindos, TO', color: 'black', latitude: '-7.98956', longitude: '-46.8645' },
	{ name: 'Cariri do Tocantins, TO', color: 'black', latitude: '-11.8881', longitude: '-49.1609' },
	{ name: 'Carmolândia, TO', color: 'black', latitude: '-7.03262', longitude: '-48.3978' },
	{ name: 'Carrasco Bonito, TO', color: 'black', latitude: '-5.31415', longitude: '-48.0314' },
	{ name: 'Caseara, TO', color: 'black', latitude: '-9.27612', longitude: '-49.9521' },
	{ name: 'Centenário, TO', color: 'black', latitude: '-8.96103', longitude: '-47.3304' },
	{ name: 'Chapada da Natividade, TO', color: 'black', latitude: '-11.6175', longitude: '-47.7486' },
	{ name: 'Chapada de Areia, TO', color: 'black', latitude: '-10.1419', longitude: '-49.1403' },
	{ name: 'Colinas do Tocantins, TO', color: 'black', latitude: '-8.05764', longitude: '-48.4757' },
	{ name: 'Colméia, TO', color: 'black', latitude: '-8.72463', longitude: '-48.7638' },
	{ name: 'Combinado, TO', color: 'black', latitude: '-12.7917', longitude: '-46.5388' },
	{ name: 'Conceição do Tocantins, TO', color: 'black', latitude: '-12.2209', longitude: '-47.2951' },
	{ name: 'Cristalândia, TO', color: 'black', latitude: '-10.5985', longitude: '-49.1942' },
	{ name: 'Crixás do Tocantins, TO', color: 'black', latitude: '-11.0994', longitude: '-48.9152' },
	{ name: 'Darcinópolis, TO', color: 'black', latitude: '-6.71591', longitude: '-47.7597' },
	{ name: 'Dianópolis, TO', color: 'black', latitude: '-11.624', longitude: '-46.8198' },
	{ name: 'Divinópolis do Tocantins, TO', color: 'black', latitude: '-9.80018', longitude: '-49.2169' },
	{ name: 'Dois Irmãos do Tocantins, TO', color: 'black', latitude: '-9.25534', longitude: '-49.0638' },
	{ name: 'Dueré, TO', color: 'black', latitude: '-11.3416', longitude: '-49.2716' },
	{ name: 'Figueirópolis, TO', color: 'black', latitude: '-12.1312', longitude: '-49.1748' },
	{ name: 'Formoso do Araguaia, TO', color: 'black', latitude: '-11.7976', longitude: '-49.5316' },
	{ name: 'Fortaleza do Tabocão, TO', color: 'black', latitude: '-9.05611', longitude: '-48.5206' },
	{ name: 'Goianorte, TO', color: 'black', latitude: '-8.77413', longitude: '-48.9313' },
	{ name: 'Goiatins, TO', color: 'black', latitude: '-7.71478', longitude: '-47.3252' },
	{ name: 'Guaraí, TO', color: 'black', latitude: '-8.83543', longitude: '-48.5114' },
	{ name: 'Gurupi, TO', color: 'black', latitude: '-11.7279', longitude: '-49.068' },
	{ name: 'Itacajá, TO', color: 'black', latitude: '-8.39293', longitude: '-47.7726' },
	{ name: 'Itaguatins, TO', color: 'black', latitude: '-5.77267', longitude: '-47.4864' },
	{ name: 'Itapiratins, TO', color: 'black', latitude: '-8.37982', longitude: '-48.1072' },
	{ name: 'Itaporã do Tocantins, TO', color: 'black', latitude: '-8.57172', longitude: '-48.6895' },
	{ name: 'Jaú do Tocantins, TO', color: 'black', latitude: '-12.6509', longitude: '-48.589' },
	{ name: 'Juarina, TO', color: 'black', latitude: '-8.11951', longitude: '-49.0643' },
	{ name: 'Lagoa da Confusão, TO', color: 'black', latitude: '-10.7906', longitude: '-49.6199' },
	{ name: 'Lagoa do Tocantins, TO', color: 'black', latitude: '-10.368', longitude: '-47.538' },
	{ name: 'Lavandeira, TO', color: 'black', latitude: '-12.7847', longitude: '-46.5099' },
	{ name: 'Lizarda, TO', color: 'black', latitude: '-9.59002', longitude: '-46.6738' },
	{ name: 'Luzinópolis, TO', color: 'black', latitude: '-6.17794', longitude: '-47.8582' },
	{ name: 'Marianópolis do Tocantins, TO', color: 'black', latitude: '-9.79377', longitude: '-49.6553' },
	{ name: 'Mateiros, TO', color: 'black', latitude: '-10.5464', longitude: '-46.4168' },
	{ name: 'Maurilândia do Tocantins, TO', color: 'black', latitude: '-5.95169', longitude: '-47.5125' },
	{ name: 'Miracema do Tocantins, TO', color: 'black', latitude: '-9.56556', longitude: '-48.393' },
	{ name: 'Miranorte, TO', color: 'black', latitude: '-9.52907', longitude: '-48.5922' },
	{ name: 'Monte do Carmo, TO', color: 'black', latitude: '-10.7611', longitude: '-48.1114' },
	{ name: 'Monte Santo do Tocantins, TO', color: 'black', latitude: '-10.0075', longitude: '-48.9941' },
	{ name: 'Muricilândia, TO', color: 'black', latitude: '-7.14669', longitude: '-48.6091' },
	{ name: 'Nazaré, TO', color: 'black', latitude: '-6.37496', longitude: '-47.6643' },
	{ name: 'Nova Rosalândia, TO', color: 'black', latitude: '-10.5651', longitude: '-48.9125' },
	{ name: 'Novo Acordo, TO', color: 'black', latitude: '-9.97063', longitude: '-47.6785' },
	{ name: 'Novo Alegre, TO', color: 'black', latitude: '-12.9217', longitude: '-46.5713' },
	{ name: 'Novo Jardim, TO', color: 'black', latitude: '-11.826', longitude: '-46.6325' },
	{ name: 'Oliveira de Fátima, TO', color: 'black', latitude: '-10.707', longitude: '-48.9086' },
	{ name: 'Palmas, TO', color: 'yellow', latitude: '-10.24', longitude: '-48.3558' },
	{ name: 'Palmeirante, TO', color: 'black', latitude: '-7.84786', longitude: '-47.9242' },
	{ name: 'Palmeiras do Tocantins, TO', color: 'black', latitude: '-6.61658', longitude: '-47.5464' },
	{ name: 'Palmeirópolis, TO', color: 'black', latitude: '-13.0447', longitude: '-48.4026' },
	{ name: 'Paranã, TO', color: 'black', latitude: '-12.6167', longitude: '-47.8734' },
	{ name: 'Paraíso do Tocantins, TO', color: 'green', latitude: '-10.175', longitude: '-48.8823' },
	{ name: 'Pedro Afonso, TO', color: 'black', latitude: '-8.97034', longitude: '-48.1729' },
	{ name: 'Peixe, TO', color: 'black', latitude: '-12.0254', longitude: '-48.5395' },
	{ name: 'Pequizeiro, TO', color: 'black', latitude: '-8.5932', longitude: '-48.9327' },
	{ name: 'Pindorama do Tocantins, TO', color: 'black', latitude: '-11.1311', longitude: '-47.5726' },
	{ name: 'Piraquê, TO', color: 'black', latitude: '-6.77302', longitude: '-48.2958' },
	{ name: 'Pium, TO', color: 'black', latitude: '-10.442', longitude: '-49.1876' },
	{ name: 'Ponte Alta do Bom Jesus, TO', color: 'black', latitude: '-12.0853', longitude: '-46.4825' },
	{ name: 'Ponte Alta do Tocantins, TO', color: 'black', latitude: '-10.7481', longitude: '-47.5276' },
	{ name: 'Porto Alegre do Tocantins, TO', color: 'black', latitude: '-11.618', longitude: '-47.0621' },
	{ name: 'Porto Nacional, TO', color: 'black', latitude: '-10.7027', longitude: '-48.408' },
	{ name: 'Praia Norte, TO', color: 'black', latitude: '-5.39281', longitude: '-47.8111' },
	{ name: 'Pugmil, TO', color: 'black', latitude: '-10.424', longitude: '-48.8957' },
	{ name: 'Recursolândia, TO', color: 'black', latitude: '-8.7227', longitude: '-47.2421' },
	{ name: 'Rio da Conceição, TO', color: 'black', latitude: '-11.3949', longitude: '-46.8847' },
	{ name: 'Rio Sono, TO', color: 'black', latitude: '-9.35002', longitude: '-47.888' },
	{ name: 'Sampaio, TO', color: 'black', latitude: '-5.35423', longitude: '-47.8782' },
	{ name: 'Sandolândia, TO', color: 'black', latitude: '-12.538', longitude: '-49.9242' },
	{ name: 'Santa Maria do Tocantins, TO', color: 'black', latitude: '-8.8046', longitude: '-47.7887' },
	{ name: 'Santa Rita do Tocantins, TO', color: 'black', latitude: '-10.8617', longitude: '-48.9161' },
	{ name: 'Santa Rosa do Tocantins, TO', color: 'black', latitude: '-11.4474', longitude: '-48.1216' },
	{ name: 'Santa Tereza do Tocantins, TO', color: 'black', latitude: '-10.2746', longitude: '-47.8033' },
	{ name: 'Santa Terezinha do Tocantins, TO', color: 'black', latitude: '-6.44438', longitude: '-47.6684' },
	{ name: 'Silvanópolis, TO', color: 'black', latitude: '-11.1471', longitude: '-48.1694' },
	{ name: 'Sucupira, TO', color: 'black', latitude: '-11.993', longitude: '-48.9685' },
	{ name: 'São Bento do Tocantins, TO', color: 'black', latitude: '-6.0258', longitude: '-47.9012' },
	{ name: 'São Félix do Tocantins, TO', color: 'black', latitude: '-10.1615', longitude: '-46.6618' },
	{ name: 'São Miguel do Tocantins, TO', color: 'black', latitude: '-5.56305', longitude: '-47.5743' },
	{ name: 'São Salvador do Tocantins, TO', color: 'black', latitude: '-12.7458', longitude: '-48.2352' },
	{ name: 'São Sebastião do Tocantins, TO', color: 'black', latitude: '-5.26131', longitude: '-48.2021' },
	{ name: 'Sítio Novo do Tocantins, TO', color: 'black', latitude: '-5.6012', longitude: '-47.6381' },
	{ name: 'Taguatinga, TO', color: 'black', latitude: '-12.4026', longitude: '-46.437' },
	{ name: 'Taipas do Tocantins, TO', color: 'black', latitude: '-12.1873', longitude: '-46.9797' },
	{ name: 'Talismã, TO', color: 'black', latitude: '-12.7949', longitude: '-49.0896' },
	{ name: 'Tocantinópolis, TO', color: 'black', latitude: '-6.32447', longitude: '-47.4224' },
	{ name: 'Tocantínia, TO', color: 'black', latitude: '-9.5632', longitude: '-48.3741' },
	{ name: 'Tupirama, TO', color: 'black', latitude: '-8.97168', longitude: '-48.1883' },
	{ name: 'Tupiratins, TO', color: 'black', latitude: '-8.39388', longitude: '-48.1277' },
	{ name: 'Wanderlândia, TO', color: 'black', latitude: '-6.85274', longitude: '-47.9601' },
{ name: 'Xambioá, TO', color: 'black', latitude: '-6.4141', longitude: '-48.532' }
];