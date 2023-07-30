var locationsGpon = [
/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */
{ name: 'Arapiraca, AL <br> GPON', color: 'green', latitude: '-9.754866', longitude: '-36.661471' },
{ name: 'Trindade, GO <br> GPON', color: 'green', latitude: '-16.651708', longitude: '-49.492667' },
{ name: 'Araxá, MG <br> GPON', color: 'green', latitude: '-19.590176', longitude: '-46.943804' },
{ name: 'Itajubá, MG <br> GPON', color: 'green', latitude: '-22.422481', longitude: '-45.459818' },
{ name: 'Paraíba Do Sul, RJ <br> GPON', color: 'green', latitude: '-22.158462', longitude: '-43.304004' },
{ name: 'Ji-Paraná, RO <br> GPON', color: 'green', latitude: '-10.877741', longitude: '-61.932152' },
{ name: 'Camaquã, RS <br> GPON', color: 'green', latitude: '-30.848897', longitude: '-51.80431' },
{ name: 'Dois Irmãos, RS <br> GPON', color: 'green', latitude: '-29.58356', longitude: '-51.089776' },
{ name: 'Marau, RS <br> GPON', color: 'green', latitude: '-28.449754', longitude: '-52.198625' },
{ name: 'Vacaria, RS <br> GPON', color: 'green', latitude: '-28.507868', longitude: '-50.941791' },
{ name: 'Içara, SC <br> GPON', color: 'green', latitude: '-28.713206', longitude: '-49.308654' },
{ name: 'Agudos, SP <br> GPON', color: 'green', latitude: '-22.469433', longitude: '-48.98632' },
{ name: 'Casa Branca, SP <br> GPON', color: 'green', latitude: '-21.77081', longitude: '-47.085245' },
{ name: 'Ibaté, SP <br> GPON', color: 'green', latitude: '-21.958358', longitude: '-47.988211' },
{ name: 'Jaguariúna, SP <br> GPON', color: 'green', latitude: '-22.70374', longitude: '-46.985062' },
{ name: 'Piedade, SP <br> GPON', color: 'green', latitude: '-23.713941', longitude: '-47.425572' },
{ name: 'Santa Cruz das Palmeiras, SP <br> GPON', color: 'green', latitude: '-21.823475', longitude: '-47.248023' },
{ name: 'Tambaú, SP <br> GPON', color: 'green', latitude: '-21.70292', longitude: '-47.270344' },
{ name: 'Araguaína, TO <br> GPON', color: 'green', latitude: '-7.192375', longitude: '-48.204402' },
{ name: 'Gurupi, TO <br> GPON', color: 'green', latitude: '-11.72794', longitude: '-49.068046' },

/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */
{ name: 'Macapá, AP <br> GPON', color: 'green', latitude: '0.034934', longitude: '-51.069395' },
{ name: 'Santana, AP <br> GPON', color: 'green', latitude: '-0.045434', longitude: '-51.172924' },
{ name: 'Alagoinhas, BA <br> GPON', color: 'green', latitude: '-12.133526', longitude: '-38.420772' },
{ name: 'Barreiras, BA <br> GPON', color: 'green', latitude: '-12.143864', longitude: '-44.996838' },
{ name: 'Camaçari, BA <br> GPON', color: 'green', latitude: '-12.699638', longitude: '-38.326265' },
{ name: 'Eunápolis, BA <br> GPON', color: 'green', latitude: '-16.371498', longitude: '-39.582122' },
{ name: 'Feira de Santana, BA <br> GPON', color: 'green', latitude: '-12.266429', longitude: '-38.966293' },
{ name: 'Ilhéus, BA <br> GPON', color: 'green', latitude: '-14.793045', longitude: '-39.04602' },
{ name: 'Itabuna, BA <br> GPON', color: 'green', latitude: '-14.787573', longitude: '-39.278056' },
{ name: 'Jequié, BA <br> GPON', color: 'green', latitude: '-13.850888', longitude: '-40.087704' },
{ name: 'Juazeiro, BA <br> GPON', color: 'green', latitude: '-9.416217', longitude: '-40.503251' },
{ name: 'Mata de São João, BA <br> GPON', color: 'green', latitude: '-12.530685', longitude: '-38.300898' },
{ name: 'Porto Seguro, BA <br> GPON', color: 'green', latitude: '-16.443473', longitude: '-39.064251' },
{ name: 'Teixeira de Freitas, BA <br> GPON', color: 'green', latitude: '-17.539915', longitude: '-39.739962' },
{ name: 'Aquiraz, CE <br> GPON', color: 'green', latitude: '-3.899293', longitude: '-38.389563' },
{ name: 'Eusébio, CE <br> GPON', color: 'green', latitude: '-3.892501', longitude: '-38.455875' },
{ name: 'Juazeiro do Norte, CE <br> GPON', color: 'green', latitude: '-7.196207', longitude: '-39.307593' },
{ name: 'Sobral, CE <br> GPON', color: 'green', latitude: '-3.689133', longitude: '-40.34821' },
{ name: 'Aracruz, ES <br> GPON', color: 'green', latitude: '-19.820045', longitude: '-40.276441' },
{ name: 'Colatina, ES <br> GPON', color: 'green', latitude: '-19.549316', longitude: '-40.626898' },
{ name: 'Caldas Novas, GO <br> GPON', color: 'green', latitude: '-17.74406', longitude: '-48.624579' },
{ name: 'Formosa, GO <br> GPON', color: 'green', latitude: '-15.539991', longitude: '-47.336999' },
{ name: 'Itumbiara, GO <br> GPON', color: 'green', latitude: '-18.409267', longitude: '-49.215845' },
{ name: 'Jataí, GO <br> GPON', color: 'green', latitude: '-17.878383', longitude: '-51.720424' },
{ name: 'Rio Verde, GO <br> GPON', color: 'green', latitude: '-17.792266', longitude: '-50.919195' },
{ name: 'Santa Helena de Goiás, GO <br> GPON', color: 'green', latitude: '-17.81152', longitude: '-50.597664' },
{ name: 'Senador Canedo, GO <br> GPON', color: 'green', latitude: '-16.708401', longitude: '-49.091398' },
{ name: 'Valparaíso de Goiás, GO <br> GPON', color: 'green', latitude: '-16.065078', longitude: '-47.975675' },
{ name: 'Imperatriz, MA <br> GPON', color: 'green', latitude: '-5.518471', longitude: '-47.477726' },
{ name: 'Timon, MA <br> GPON', color: 'green', latitude: '-5.097692', longitude: '-42.83292' },
{ name: 'Araguari, MG <br> GPON', color: 'green', latitude: '-18.645575', longitude: '-48.193392' },
{ name: 'Barbacena, MG <br> GPON', color: 'green', latitude: '-21.221446', longitude: '-43.770266' },
{ name: 'Cataguases, MG <br> GPON', color: 'green', latitude: '-21.39239', longitude: '-42.689647' },
{ name: 'Conselheiro Lafaiete, MG <br> GPON', color: 'green', latitude: '-20.663445', longitude: '-43.784609' },
{ name: 'Coronel Fabriciano, MG <br> GPON', color: 'green', latitude: '-19.517879', longitude: '-42.627585' },
{ name: 'Divinópolis, MG <br> GPON', color: 'green', latitude: '-20.144646', longitude: '-44.891223' },
{ name: 'Itabira, MG <br> GPON', color: 'green', latitude: '-19.623936', longitude: '-43.23123' },
{ name: 'Itaúna, MG <br> GPON', color: 'green', latitude: '-20.081798', longitude: '-44.580112' },
{ name: 'Ituiutaba, MG <br> GPON', color: 'green', latitude: '-18.977191', longitude: '-49.463945' },
{ name: 'Lagoa Santa, MG <br> GPON', color: 'green', latitude: '-19.63967', longitude: '-43.893216' },
{ name: 'Lavras, MG <br> GPON', color: 'green', latitude: '-21.248002', longitude: '-45.000949' },
{ name: 'Manhuaçu, MG <br> GPON', color: 'green', latitude: '-20.257226', longitude: '-42.027987' },
{ name: 'Montes Claros, MG <br> GPON', color: 'green', latitude: '-16.728177', longitude: '-43.857809' },
{ name: 'Pará de Minas, MG <br> GPON', color: 'green', latitude: '-19.853441', longitude: '-44.611355' },
{ name: 'Patos de Minas, MG <br> GPON', color: 'green', latitude: '-18.569938', longitude: '-46.501268' },
{ name: 'Poços de Caldas, MG <br> GPON', color: 'green', latitude: '-21.779975', longitude: '-46.569184' },
{ name: 'Pouso Alegre, MG <br> GPON', color: 'green', latitude: '-22.22659', longitude: '-45.938935' },
{ name: 'Santa Luzia, MG <br> GPON', color: 'green', latitude: '-19.754824', longitude: '-43.849658' },
{ name: 'São João Del Rei, MG <br> GPON', color: 'green', latitude: '-21.131054', longitude: '-44.252646' },
{ name: 'Timóteo, MG <br> GPON', color: 'green', latitude: '-19.581086', longitude: '-42.64713' },
{ name: 'Três Corações, MG <br> GPON', color: 'green', latitude: '-21.692091', longitude: '-45.251117' },
{ name: 'Ubá, MG <br> GPON', color: 'green', latitude: '-21.120444', longitude: '-42.935931' },
{ name: 'Vespasiano, MG <br> GPON', color: 'green', latitude: '-19.688326', longitude: '-43.9239' },
{ name: 'Viçosa, MG <br> GPON', color: 'green', latitude: '-20.755916', longitude: '-42.87417' },
{ name: 'Ponta Porã, MS <br> GPON', color: 'green', latitude: '-22.529617', longitude: '-55.720326' },
{ name: 'Três Lagoas, MS <br> GPON', color: 'green', latitude: '-20.784853', longitude: '-51.700731' },
{ name: 'Lucas do Rio Verde, MT <br> GPON', color: 'green', latitude: '-13.058796', longitude: '-55.904202' },
{ name: 'Nova Mutum, MT <br> GPON', color: 'green', latitude: '-13.837389', longitude: '-56.074316' },
{ name: 'Sinop, MT <br> GPON', color: 'green', latitude: '-11.86043', longitude: '-55.509062' },
{ name: 'Sorriso, MT <br> GPON', color: 'green', latitude: '-12.542527', longitude: '-55.721051' },
{ name: 'Castanhal, PA <br> GPON', color: 'green', latitude: '-1.297971', longitude: '-47.916742' },
{ name: 'Marabá, PA <br> GPON', color: 'green', latitude: '-5.38075', longitude: '-49.132672' },
{ name: 'Paragominas, PA <br> GPON', color: 'green', latitude: '-3.002116', longitude: '-47.352692' },
{ name: 'Parauapebas, PA <br> GPON', color: 'green', latitude: '-6.067812', longitude: '-49.903733' },
{ name: 'Petrolina, PE <br> GPON', color: 'green', latitude: '-9.388662', longitude: '-40.502731' },
{ name: 'Parnaíba, PI <br> GPON', color: 'green', latitude: '-2.905847', longitude: '-41.775388' },
{ name: 'Apucarana, PR <br> GPON', color: 'green', latitude: '-23.549961', longitude: '-51.463486' },
{ name: 'Cambé, PR <br> GPON', color: 'green', latitude: '-23.276575', longitude: '-51.279832' },
{ name: 'Paranaguá, PR <br> GPON', color: 'green', latitude: '-25.516078', longitude: '-48.522528' },
{ name: 'Rolândia, PR <br> GPON', color: 'green', latitude: '-23.31012', longitude: '-51.365928' },
{ name: 'Armação Dos Búzios, RJ <br> GPON', color: 'green', latitude: '-22.752846', longitude: '-41.884559' },
{ name: 'Cabo Frio, RJ <br> GPON', color: 'green', latitude: '-22.88943', longitude: '-42.028595' },
{ name: 'Itaguaí, RJ <br> GPON', color: 'green', latitude: '-22.863566', longitude: '-43.779821' },
{ name: 'Miguel Pereira, RJ <br> GPON', color: 'green', latitude: '-22.457242', longitude: '-43.480275' },
{ name: 'Nova Friburgo, RJ <br> GPON', color: 'green', latitude: '-22.293224', longitude: '-42.537692' },
{ name: 'São Pedro da Aldeia, RJ <br> GPON', color: 'green', latitude: '-22.842859', longitude: '-42.102596' },
{ name: 'Três Rios, RJ <br> GPON', color: 'green', latitude: '-22.11651', longitude: '-43.218533' },
{ name: 'Valença, RJ <br> GPON', color: 'green', latitude: '-22.244496', longitude: '-43.71288' },
{ name: 'Vassouras, RJ <br> GPON', color: 'green', latitude: '-22.405889', longitude: '-43.668555' },
{ name: 'Mossoró, RN <br> GPON', color: 'green', latitude: '-5.183737', longitude: '-37.347446' },
{ name: 'Ariquemes, RO <br> GPON', color: 'green', latitude: '-9.905711', longitude: '-63.032516' },
{ name: 'Cacoal, RO <br> GPON', color: 'green', latitude: '-11.434271', longitude: '-61.456167' },
{ name: 'Vilhena, RO <br> GPON', color: 'green', latitude: '-12.750183', longitude: '-60.148847' },
{ name: 'Alegrete, RS <br> GPON', color: 'green', latitude: '-29.790166', longitude: '-55.794862' },
{ name: 'Arroio do Meio, RS <br> GPON', color: 'green', latitude: '-29.401353', longitude: '-51.955735' },
{ name: 'Cachoeira do Sul, RS <br> GPON', color: 'green', latitude: '-30.032988', longitude: '-52.892756' },
{ name: 'Canela, RS <br> GPON', color: 'green', latitude: '-29.355993', longitude: '-50.811921' },
{ name: 'Carazinho, RS <br> GPON', color: 'green', latitude: '-28.295844', longitude: '-52.79326' },
{ name: 'Carlos Barbosa, RS <br> GPON', color: 'green', latitude: '-29.296949', longitude: '-51.502847' },
{ name: 'Charqueadas, RS <br> GPON', color: 'green', latitude: '-29.962478', longitude: '-51.628872' },
{ name: 'Eldorado do Sul, RS <br> GPON', color: 'green', latitude: '-30.084676', longitude: '-51.618702' },
{ name: 'Encantado, RS <br> GPON', color: 'green', latitude: '-29.235141', longitude: '-51.870282' },
{ name: 'Estrela, RS <br> GPON', color: 'green', latitude: '-29.500207', longitude: '-51.949508' },
{ name: 'Frederico Westphalen, RS <br> GPON', color: 'green', latitude: '-27.358644', longitude: '-53.395824' },
{ name: 'Garibaldi, RS <br> GPON', color: 'green', latitude: '-29.258979', longitude: '-51.535179' },
{ name: 'Gramado, RS <br> GPON', color: 'green', latitude: '-29.373351', longitude: '-50.876164' },
{ name: 'Guaíba, RS <br> GPON', color: 'green', latitude: '-30.108592', longitude: '-51.323314' },
{ name: 'Igrejinha, RS <br> GPON', color: 'green', latitude: '-29.569318', longitude: '-50.791894' },
{ name: 'Imbé, RS <br> GPON', color: 'green', latitude: '-29.975269', longitude: '-50.128068' },
{ name: 'Itaqui, RS <br> GPON', color: 'green', latitude: '-29.131051', longitude: '-56.551478' },
{ name: 'Ivoti, RS <br> GPON', color: 'green', latitude: '-29.599463', longitude: '-51.153326' },
{ name: 'Montenegro, RS <br> GPON', color: 'green', latitude: '-29.682414', longitude: '-51.467903' },
{ name: 'Nova Petrópolis, RS <br> GPON', color: 'green', latitude: '-29.374112', longitude: '-51.113552' },
{ name: 'Osório, RS <br> GPON', color: 'green', latitude: '-29.888089', longitude: '-50.266713' },
{ name: 'Palmeira Das Missões, RS <br> GPON', color: 'green', latitude: '-27.900652', longitude: '-53.313378' },
{ name: 'Panambi, RS <br> GPON', color: 'green', latitude: '-28.283328', longitude: '-53.502261' },
{ name: 'Parobé, RS <br> GPON', color: 'green', latitude: '-29.624257', longitude: '-50.83118' },
{ name: 'Rio Pardo, RS <br> GPON', color: 'green', latitude: '-29.98803', longitude: '-52.37113' },
{ name: 'Rosário do Sul, RS <br> GPON', color: 'green', latitude: '-30.251483', longitude: '-54.922106' },
{ name: 'Santa Rosa, RS <br> GPON', color: 'green', latitude: '-27.8702', longitude: '-54.479629' },
{ name: 'Santana do Livramento, RS <br> GPON', color: 'green', latitude: '-30.88772', longitude: '-55.531467' },
{ name: 'Santo Ângelo, RS <br> GPON', color: 'green', latitude: '-28.300128', longitude: '-54.266781' },
{ name: 'São Borja, RS <br> GPON', color: 'green', latitude: '-28.657828', longitude: '-56.003603' },
{ name: 'São Gabriel, RS <br> GPON', color: 'green', latitude: '-30.333688', longitude: '-54.321657' },
{ name: 'São Lourenço do Sul, RS <br> GPON', color: 'green', latitude: '-31.356374', longitude: '-51.971531' },
{ name: 'São Luiz Gonzaga, RS <br> GPON', color: 'green', latitude: '-28.412032', longitude: '-54.955942' },
{ name: 'Taquara, RS <br> GPON', color: 'green', latitude: '-29.650471', longitude: '-50.775278' },
{ name: 'Teutônia, RS <br> GPON', color: 'green', latitude: '-29.448205', longitude: '-51.804375' },
{ name: 'Torres, RS <br> GPON', color: 'green', latitude: '-29.333438', longitude: '-49.733289' },
{ name: 'Tramandaí, RS <br> GPON', color: 'green', latitude: '-29.98414', longitude: '-50.132187' },
{ name: 'Três Coroas, RS <br> GPON', color: 'green', latitude: '-29.513719', longitude: '-50.773869' },
{ name: 'Venâncio Aires, RS <br> GPON', color: 'green', latitude: '-29.614306', longitude: '-52.193159' },
{ name: 'Vera Cruz, RS <br> GPON', color: 'green', latitude: '-29.718435', longitude: '-52.515176' },
{ name: 'Veranópolis, RS <br> GPON', color: 'green', latitude: '-28.931197', longitude: '-51.551614' },
{ name: 'Araranguá, SC <br> GPON', color: 'green', latitude: '-28.935615', longitude: '-49.491809' },
{ name: 'Biguaçu, SC <br> GPON', color: 'green', latitude: '-27.496004', longitude: '-48.65979' },
{ name: 'Caçador, SC <br> GPON', color: 'green', latitude: '-26.77567', longitude: '-51.012004' },
{ name: 'Camboriú, SC <br> GPON', color: 'green', latitude: '-27.024078', longitude: '-48.650338' },
{ name: 'Concórdia, SC <br> GPON', color: 'green', latitude: '-27.233461', longitude: '-52.025962' },
{ name: 'Fraiburgo, SC <br> GPON', color: 'green', latitude: '-27.023288', longitude: '-50.919978' },
{ name: 'Gaspar, SC <br> GPON', color: 'green', latitude: '-26.933597', longitude: '-48.953428' },
{ name: 'Guaramirim, SC <br> GPON', color: 'green', latitude: '-26.468753', longitude: '-49.002628' },
{ name: 'Indaial, SC <br> GPON', color: 'green', latitude: '-26.899247', longitude: '-49.235417' },
{ name: 'Jaraguá do Sul, SC <br> GPON', color: 'green', latitude: '-26.485083', longitude: '-49.07125' },
{ name: 'Joaçaba, SC <br> GPON', color: 'green', latitude: '-27.172105', longitude: '-51.510788' },
{ name: 'Lages, SC <br> GPON', color: 'green', latitude: '-27.814966', longitude: '-50.325862' },
{ name: 'Mafra, SC <br> GPON', color: 'green', latitude: '-26.115935', longitude: '-49.808624' },
{ name: 'Rio do Sul, SC <br> GPON', color: 'green', latitude: '-27.215596', longitude: '-49.643016' },
{ name: 'Rio Negrinho, SC <br> GPON', color: 'green', latitude: '-26.259075', longitude: '-49.517746' },
{ name: 'São Bento do Sul, SC <br> GPON', color: 'green', latitude: '-26.249542', longitude: '-49.383077' },
{ name: 'São Francisco do Sul, SC <br> GPON', color: 'green', latitude: '-26.257917', longitude: '-48.634372' },
{ name: 'Timbó, SC <br> GPON', color: 'green', latitude: '-26.82464', longitude: '-49.269039' },
{ name: 'Tubarão, SC <br> GPON', color: 'green', latitude: '-28.47131', longitude: '-49.014371' },
{ name: 'Videira, SC <br> GPON', color: 'green', latitude: '-27.008624', longitude: '-51.154274' },
{ name: 'Xanxerê, SC <br> GPON', color: 'green', latitude: '-26.874694', longitude: '-52.403579' },
{ name: 'Xaxim, SC <br> GPON', color: 'green', latitude: '-26.959643', longitude: '-52.537446' },
{ name: 'Adamantina, SP <br> GPON', color: 'green', latitude: '-21.682012', longitude: '-51.073695' },
{ name: 'Alumínio, SP <br> GPON', color: 'green', latitude: '-23.530553', longitude: '-47.254571' },
{ name: 'Álvares Machado, SP <br> GPON', color: 'green', latitude: '-22.076415', longitude: '-51.47224' },
{ name: 'Américo Brasiliense, SP <br> GPON', color: 'green', latitude: '-21.728771', longitude: '-48.11467' },
{ name: 'Amparo, SP <br> GPON', color: 'green', latitude: '-22.70879', longitude: '-46.772022' },
{ name: 'Andradina, SP <br> GPON', color: 'green', latitude: '-20.894761', longitude: '-51.378568' },
{ name: 'Arujá, SP <br> GPON', color: 'green', latitude: '-23.396476', longitude: '-46.319983' },
{ name: 'Avaré, SP <br> GPON', color: 'green', latitude: '-23.106732', longitude: '-48.925052' },
{ name: 'Bady Bassitt, SP <br> GPON', color: 'green', latitude: '-20.919689', longitude: '-49.4385' },
{ name: 'Barretos, SP <br> GPON', color: 'green', latitude: '-20.553146', longitude: '-48.569832' },
{ name: 'Barrinha, SP <br> GPON', color: 'green', latitude: '-21.186374', longitude: '-48.163614' },
{ name: 'Batatais, SP <br> GPON', color: 'green', latitude: '-20.892867', longitude: '-47.592149' },
{ name: 'Bebedouro, SP <br> GPON', color: 'green', latitude: '-20.949077', longitude: '-48.479083' },
{ name: 'Birigui, SP <br> GPON', color: 'green', latitude: '-21.291034', longitude: '-50.343162' },
{ name: 'Boituva, SP <br> GPON', color: 'green', latitude: '-23.285531', longitude: '-47.678574' },
{ name: 'Cabreúva, SP <br> GPON', color: 'green', latitude: '-23.30533', longitude: '-47.136251' },
{ name: 'Caieiras, SP <br> GPON', color: 'green', latitude: '-23.360729', longitude: '-46.73974' },
{ name: 'Cajamar, SP <br> GPON', color: 'green', latitude: '-23.355014', longitude: '-46.878146' },
{ name: 'Campo Limpo Paulista, SP <br> GPON', color: 'green', latitude: '-23.207791', longitude: '-46.788919' },
{ name: 'Campos do Jordão, SP <br> GPON', color: 'green', latitude: '-22.729618', longitude: '-45.583337' },
{ name: 'Caraguatatuba, SP <br> GPON', color: 'green', latitude: '-23.612535', longitude: '-45.412533' },
{ name: 'Catanduva, SP <br> GPON', color: 'green', latitude: '-21.131381', longitude: '-48.977015' },
{ name: 'Cerquilho, SP <br> GPON', color: 'green', latitude: '-23.166487', longitude: '-47.745862' },
{ name: 'Cordeirópolis, SP <br> GPON', color: 'green', latitude: '-22.477778', longitude: '-47.451886' },
{ name: 'Cravinhos, SP <br> GPON', color: 'green', latitude: '-21.337959', longitude: '-47.732427' },
{ name: 'Descalvado, SP <br> GPON', color: 'green', latitude: '-21.900211', longitude: '-47.618105' },
{ name: 'Dracena, SP <br> GPON', color: 'green', latitude: '-21.484311', longitude: '-51.535034' },
{ name: 'Espírito Santo do Pinhal, SP <br> GPON', color: 'green', latitude: '-22.190871', longitude: '-46.74767' },
{ name: 'Fernandópolis, SP <br> GPON', color: 'green', latitude: '-20.280556', longitude: '-50.247115' },
{ name: 'Garça, SP <br> GPON', color: 'green', latitude: '-22.212516', longitude: '-49.654596' },
{ name: 'Guaíra, SP <br> GPON', color: 'green', latitude: '-20.319591', longitude: '-48.31197' },
{ name: 'Guapiaçu, SP <br> GPON', color: 'green', latitude: '-20.795885', longitude: '-49.217201' },
{ name: 'Guararapes, SP <br> GPON', color: 'green', latitude: '-21.254431', longitude: '-50.645338' },
{ name: 'Ibiúna, SP <br> GPON', color: 'green', latitude: '-23.65961', longitude: '-47.223037' },
{ name: 'Iperó, SP <br> GPON', color: 'green', latitude: '-23.351296', longitude: '-47.692717' },
{ name: 'Itanhaém, SP <br> GPON', color: 'green', latitude: '-24.173633', longitude: '-46.787986' },
{ name: 'Itapeva, SP <br> GPON', color: 'green', latitude: '-23.978823', longitude: '-48.876433' },
{ name: 'Itapira, SP <br> GPON', color: 'green', latitude: '-22.435731', longitude: '-46.822434' },
{ name: 'Itaquaquecetuba, SP <br> GPON', color: 'green', latitude: '-23.483481', longitude: '-46.345724' },
{ name: 'Itatiba, SP <br> GPON', color: 'green', latitude: '-23.003497', longitude: '-46.846353' },
{ name: 'Itupeva, SP <br> GPON', color: 'green', latitude: '-23.152635', longitude: '-47.059262' },
{ name: 'Ituverava, SP <br> GPON', color: 'green', latitude: '-20.335465', longitude: '-47.790207' },
{ name: 'Jaboticabal, SP <br> GPON', color: 'green', latitude: '-21.252037', longitude: '-48.325223' },
{ name: 'Jales, SP <br> GPON', color: 'green', latitude: '-20.267227', longitude: '-50.549442' },
{ name: 'Jardinópolis, SP <br> GPON', color: 'green', latitude: '-21.017612', longitude: '-47.760583' },
{ name: 'Jarinu, SP <br> GPON', color: 'green', latitude: '-23.103855', longitude: '-46.728015' },
{ name: 'José Bonifácio, SP <br> GPON', color: 'green', latitude: '-21.055062', longitude: '-49.689233' },
{ name: 'Laranjal Paulista, SP <br> GPON', color: 'green', latitude: '-23.050564', longitude: '-47.837549' },
{ name: 'Leme, SP <br> GPON', color: 'green', latitude: '-22.180857', longitude: '-47.384109' },
{ name: 'Lençóis Paulista, SP <br> GPON', color: 'green', latitude: '-22.602693', longitude: '-48.803683' },
{ name: 'Lins, SP <br> GPON', color: 'green', latitude: '-21.67182', longitude: '-49.752555' },
{ name: 'Louveira, SP <br> GPON', color: 'green', latitude: '-23.085572', longitude: '-46.948369' },
{ name: 'Mairinque, SP <br> GPON', color: 'green', latitude: '-23.539822', longitude: '-47.184995' },
{ name: 'Matão, SP <br> GPON', color: 'green', latitude: '-21.602511', longitude: '-48.363968' },
{ name: 'Mirandópolis, SP <br> GPON', color: 'green', latitude: '-21.131345', longitude: '-51.1035' },
{ name: 'Mirassol, SP <br> GPON', color: 'green', latitude: '-20.816874', longitude: '-49.52061' },
{ name: 'Mococa, SP <br> GPON', color: 'green', latitude: '-21.464731', longitude: '-47.002405' },
{ name: 'Mongaguá, SP <br> GPON', color: 'green', latitude: '-24.080901', longitude: '-46.626526' },
{ name: 'Monte Alto, SP <br> GPON', color: 'green', latitude: '-21.265545', longitude: '-48.497066' },
{ name: 'Morungaba, SP <br> GPON', color: 'green', latitude: '-22.881071', longitude: '-46.789601' },
{ name: 'Orlândia, SP <br> GPON', color: 'green', latitude: '-20.716925', longitude: '-47.885205' },
{ name: 'Ourinhos, SP <br> GPON', color: 'green', latitude: '-22.979695', longitude: '-49.869702' },
{ name: 'Pedreira, SP <br> GPON', color: 'green', latitude: '-22.741347', longitude: '-46.894846' },
{ name: 'Penápolis, SP <br> GPON', color: 'green', latitude: '-21.414765', longitude: '-50.076855' },
{ name: 'Peruíbe, SP <br> GPON', color: 'green', latitude: '-24.311974', longitude: '-47.0012' },
{ name: 'Piracaia, SP <br> GPON', color: 'green', latitude: '-23.052545', longitude: '-46.359374' },
{ name: 'Pirassununga, SP <br> GPON', color: 'green', latitude: '-21.995982', longitude: '-47.425746' },
{ name: 'Pontal, SP <br> GPON', color: 'green', latitude: '-21.021565', longitude: '-48.042261' },
{ name: 'Porto Ferreira, SP <br> GPON', color: 'green', latitude: '-21.849814', longitude: '-47.487034' },
{ name: 'Potirendaba, SP <br> GPON', color: 'green', latitude: '-21.042789', longitude: '-49.381509' },
{ name: 'Presidente Bernardes, SP <br> GPON', color: 'green', latitude: '-22.008198', longitude: '-51.556507' },
{ name: 'Promissão, SP <br> GPON', color: 'green', latitude: '-21.535572', longitude: '-49.85989' },
{ name: 'Registro, SP <br> GPON', color: 'green', latitude: '-24.497942', longitude: '-47.844895' },
{ name: 'Ribeirão Pires, SP <br> GPON', color: 'green', latitude: '-23.706669', longitude: '-46.405805' },
{ name: 'Santa Cruz do Rio Pardo, SP <br> GPON', color: 'green', latitude: '-22.89875', longitude: '-49.635444' },
{ name: 'Santa Gertrudes, SP <br> GPON', color: 'green', latitude: '-22.457229', longitude: '-47.52716' },
{ name: 'Santa Isabel, SP <br> GPON', color: 'green', latitude: '-23.317194', longitude: '-46.223668' },
{ name: 'Santa Rosa de Viterbo, SP <br> GPON', color: 'green', latitude: '-21.477568', longitude: '-47.362213' },
{ name: 'São João da Boa Vista, SP <br> GPON', color: 'green', latitude: '-21.970747', longitude: '-46.794356' },
{ name: 'São Joaquim da Barra, SP <br> GPON', color: 'green', latitude: '-20.581158', longitude: '-47.859316' },
{ name: 'São José do Rio Pardo, SP <br> GPON', color: 'green', latitude: '-21.595288', longitude: '-46.887303' },
{ name: 'São Roque, SP <br> GPON', color: 'green', latitude: '-23.522598', longitude: '-47.13567' },
{ name: 'São Sebastião, SP <br> GPON', color: 'green', latitude: '-23.795059', longitude: '-45.414314' },
{ name: 'Serra Negra, SP <br> GPON', color: 'green', latitude: '-22.613941', longitude: '-46.703271' },
{ name: 'Serrana, SP <br> GPON', color: 'green', latitude: '-21.204336', longitude: '-47.595239' },
{ name: 'Tatuí, SP <br> GPON', color: 'green', latitude: '-23.348731', longitude: '-47.84612' },
{ name: 'Tremembé, SP <br> GPON', color: 'green', latitude: '-22.95714', longitude: '-45.547526' },
{ name: 'Ubatuba, SP <br> GPON', color: 'green', latitude: '-23.433162', longitude: '-45.083415' },
{ name: 'Valparaíso, SP <br> GPON', color: 'green', latitude: '-21.222929', longitude: '-50.869874' },
{ name: 'Várzea Paulista, SP <br> GPON', color: 'green', latitude: '-23.213582', longitude: '-46.823444' },
{ name: 'Votuporanga, SP <br> GPON', color: 'green', latitude: '-20.423659', longitude: '-49.978112' },
{ name: 'Paraíso do Tocantins, TO <br> GPON', color: 'green', latitude: '-10.174998', longitude: '-48.882269' }
];