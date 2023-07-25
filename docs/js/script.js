$(window).on('load', function() {
    // Atualiza data update dados no HTML
    $('#data-dados').html(data_update);

    // Inicia mapa centralizado no Brasil
    let map = L.map('map').setView([-14.235004, -51.925280], 5);

    // Adiciona layers de diferentes tipos de mapa
    let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors',
        maxZoom: 18,
    });
    let satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Imagery &copy; <a href="https://www.arcgis.com/" target="_blank">ArcGIS</a>',
        maxZoom: 18,
    });
    let cartoDarkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map data &copy; <a href ="https://carto.com/" target="_blank">CARTO</a>',
        maxZoom: 18,
    });
    let cartoVoyagerLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: 'Map data &copy; <a href="https://carto.com/" target="_blank">CARTO</a>',
        maxZoom: 18,
    });
    let stamenTerrainLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0" target="_blank">CC BY SA</a>',
        maxZoom: 18,
    });
    let baseLayers = {
        "OpenStreetMap": osmLayer,
        "Satélite": satelliteLayer,
        "Carto Dark": cartoDarkLayer,
        "Carto Voyager": cartoVoyagerLayer,
        "Stamen Terrain": stamenTerrainLayer
    };

    // Inicia as diferentes layers de mapas
    osmLayer.addTo(map);

    // Carrega um marcador para cada tipo de tecnologia como uma layer diferente, com base nos dados JS carregados
    let GPON = L.layerGroup().addTo(map);
    locations_gpon.forEach(function (location) {
        let iconUrl = './img/marker-icon-' + location.color + '.png';
        let customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41]
        });
        let marker = L.marker([location.latitude, location.longitude], {
            icon: customIcon
        }).bindPopup(location.name);
        GPON.addLayer(marker);
    });

    let HFC = L.layerGroup().addTo(map);
    locations_hfc.forEach(function (location) {
        let iconUrl = './img/marker-icon-' + location.color + '.png';
        let customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41]
        });
        let marker = L.marker([location.latitude, location.longitude], {
            icon: customIcon
        }).bindPopup(location.name);
        HFC.addLayer(marker);
    });

    let SOBREPO = L.layerGroup().addTo(map);
    locations_sobrepo.forEach(function (location) {
        let iconUrl = './img/marker-icon-' + location.color + '.png';
        let customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41]
        });
        var marker = L.marker([location.latitude, location.longitude], {
            icon: customIcon
        }).bindPopup(location.name);
        SOBREPO.addLayer(marker);
    });

    let GPONNEUTRO = L.layerGroup().addTo(map);
    locations_neutrogpon.forEach(function (location) {
        let iconUrl = './img/marker-icon-' + location.color + '.png';
        let customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41]
        });
        var marker = L.marker([location.latitude, location.longitude], {
            icon: customIcon
        }).bindPopup(location.name);
        GPONNEUTRO.addLayer(marker);
    });

    let HFCNEUTRO = L.layerGroup();
    locations_neutrohfc.forEach(function (location) {
        let iconUrl = './img/marker-icon-' + location.color + '.png';
        let customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41]
        });
        let marker = L.marker([location.latitude, location.longitude], {
            icon: customIcon
        }).bindPopup(location.name);
        HFCNEUTRO.addLayer(marker);
    });

    let SEMNADA = L.layerGroup();
    locations_nada.forEach(function (location) {
        let iconUrl = './img/marker-icon-' + location.color + '.png';
        let customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41]
        });
        let marker = L.marker([location.latitude, location.longitude], {
            icon: customIcon
        }).bindPopup(location.name);
        SEMNADA.addLayer(marker);
    });

    let ERROAPI = L.layerGroup();
    locations_erroapi.forEach(function (location) {
        let iconUrl = './img/marker-icon-' + location.color + '.png';
        let customIcon = L.icon({
            iconUrl: iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41]
        });
        let marker = L.marker([location.latitude, location.longitude], {
            icon: customIcon
        }).bindPopup(location.name);
        ERROAPI.addLayer(marker);
    });

    // Cria menu layers com cada tecnologia e seus marcadores previamente carregados
    let controle_tecnologias = {
        'GPON <img height="20" width="15" src="./img/marker-icon-green.png" alt="Marcador GPON"/>': GPON,
        'HFC <img height="20" width="15" src="./img/marker-icon-red.png" alt="Marcador HFC"/>': HFC,
        'Sobreposição <img height="20" width="15" src="./img/marker-icon-yellow.png" alt="Marcador Sobreposição"/>': SOBREPO,
        'GPON Rede neutra <img height="20" width="15" src="./img/marker-icon-grey.png" alt="Marcador GPON Rede Neutra"/>': GPONNEUTRO,
        'HFC Rede neutra <img height="20" width="15" src="./img/marker-icon-violet.png" alt="Marcador HFC Rede Neutra"/>': HFCNEUTRO,
        'Sem serviço FIXO <img height="20" width="15" src="./img/marker-icon-black.png" alt="Marcador Sem serviço FIXO"/>': SEMNADA,
        'ERRO Consulta API <img height="20" width="15" src="./img/marker-icon-orange.png" alt="Marcador ERRO Consulta API"/>': ERROAPI
    };

    // Inicia a layers dos varios tipos mapa e marcadores de tecnologia
    L.control.layers(baseLayers, controle_tecnologias).addTo(map);

    // Calcular a contagem numerica da legenda
    $('#somatorio-gpon').html(`<span class = "center"> ${locations_gpon.length}</span>`);
    $('#somatorio-hfc').html(`<span class = "center" > ${locations_hfc.length}</span>`);
    $('#somatorio-sobre').html(`<span class = "center" > ${locations_sobrepo.length}</span>`);
    $('#somatorio-neutragpon').html(`<span class = "center" > ${locations_neutrogpon.length}</span>`);
    $('#somatorio-neutrahfc').html(`<span class = "center" > ${locations_neutrohfc.length}</span>`);
    $('#somatorio-nada').html(`<span class = "center" > ${locations_nada.length}</span>`);
    $('#somatorio-erroapi').html(`<span class = "center" > ${locations_erroapi.length}</span>`);

    // Função para validar os campos antes de fazer a consulta CEP e Numero
    function validarCampos() {
        let cep = $('#cep').val();
        let numero = $('#numero').val();
        // Verificar se os campos estão preenchidos corretamente
        if (cep.length !== 8) {
            //alert('O campo CEP deve conter 8 números.');
            $('#telaerro-conteudo').html(`O campo CEP deve conter 8 números.`);
            $('#telaerro').css('display','block');
            return false;
        }
        if (numero.length < 1 || numero.length > 9) {
            //alert('O campo Número deve conter de 1 a 9 números.');
            $('#telaerro-conteudo').html(`O campo Número deve conter de 1 a 9 números.`);
            $('#telaerro').css('display','block');
            return false;
        }
        return true;
    }

    // Função para fazer a consulta AJAX CEP e Numero
    function consultarViabilidade() {
        if (!validarCampos()) {
            return;
        }
        let cep = $('#cep').val();
        let numero = $('#numero').val();
        let url = 'https://api.amxrest.net/viability/' + cep + '/' + numero;
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function (data) {

                if (data.statusCode == 200) {

                    //Realiza consulta endereço em outra api, o resultado retornado da api claro possue varios erros no cadastro como nome do logradouro
                    //Caso api não retorne dados, fall back para dados api claro
                    let logradouro = '';
                    let bairro = '';
                    let cidade = '';
                    let uf = '';
                    $.ajax({
                        url: 'https://viacep.com.br/ws/' + cep + '/json/',
                        type: 'GET',
                        dataType: 'json',
                        async: false,
                        success: function (data_viacep) {
                            if (data_viacep.logradouro != null) {
                                logradouro = String(data_viacep.logradouro);
                            } else {
                                logradouro = data.data.logradouro;
                            }

                            if (data_viacep.bairro != null) {
                                bairro = String(data_viacep.bairro);
                            } else {
                                bairro = data.data.bairro;
                            }

                            if (data_viacep.localidade != null) {
                                cidade = String(data_viacep.localidade);
                            } else {
                                cidade = data.data.cidade;
                            }

                            if (data_viacep.uf != null) {
                                uf = String(data_viacep.uf);
                            } else {
                                uf = data.data.uf;
                            }
                        },
                        error: function () {
                            logradouro = data.data.logradouro;
                            bairro = data.data.bairro;
                            cidade = data.data.cidade;
                            uf = data.data.uf;
                            numero = data.data.number;
                        }
                    });
                    // Exibir campos Logradouro, Number e Cidade em uma linha, mais dados consulta tecnologia bia api cep
                    let resultado = '<span> Localização aproximada <br> ';
                    resultado += 'Ver no <a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(logradouro + ', ' + numero + ', ' + cidade + ', ' + uf + ', Brasil') + '" target="_blank"> Google Maps <img src="./img/google_maps_icon.png" /></a> </span>';
                    resultado += '<p>Endereço: ' + logradouro + ', ' + data.data.number + ', ' + bairro + ', ' + cidade + ', ' + uf + ', Brasil</p>';

                    for (let i = 0; i < data.data.technologies.length; i++) {
                        let technology = data.data.technologies[i];
                        // Verifica se a rede utilizada é da VTAL
                        if (data.data.cableNodeID === 'GPONAVTAL') {
                            if (technology.name === 'Cable' && technology.gpon === false) {
                                if (technology.tv != false || technology.phone != false || technology.internet != false) {
                                    resultado += '<p> SERVIÇOS VIA REDE NEUTRA VTAL:<br>';
                                    if (technology.tv === true) {
                                        resultado += '&#9679; TV<br>';
                                    }
                                    if (technology.phone === true) {
                                        resultado += '&#9679; TELEFONE FIXO<br>';
                                    }
                                    if (technology.internet === true) {
                                        resultado += '&#9679; INTERNET<br>';
                                    }
                                    resultado += '</p>';
                                }
                            }
                        }
                        // Verifica se a rede utilizada é da ATC
                        else if (data.data.cableNodeID === 'GPONAATC') {
                            if (technology.name === 'Cable' && technology.gpon === false) {
                                if (technology.tv != false || technology.phone != false || technology.internet != false) {
                                    resultado += '<p> SERVIÇOS VIA REDE NEUTRA ATC:<br>';
                                    if (technology.tv === true) {
                                        resultado += '&#9679; TV<br>';
                                    }
                                    if (technology.phone === true) {
                                        resultado += '&#9679; TELEFONE FIXO<br>';
                                    }
                                    if (technology.internet === true) {
                                        resultado += '&#9679; INTERNET<br>';
                                    }
                                    resultado += '</p>';
                                }
                            }
                        }
                        // A rede é propria
                        else {
                            // Verificar se é rede HFC
                            if (technology.name === 'Cable' && technology.gpon === false) {
                                if (technology.tv != false || technology.phone != false || technology.internet != false) {
                                    resultado += '<p> SERVIÇOS VIA HFC(COAXIAL):<br>';
                                    if (technology.tv === true) {
                                        resultado += '&#9679; TV<br>';
                                    }
                                    if (technology.phone === true) {
                                        resultado += '&#9679; TELEFONE FIXO<br>';
                                    }
                                    if (technology.internet === true) {
                                        resultado += '&#9679; INTERNET<br>';
                                    }
                                    resultado += '</p>';
                                }
                            }
                            // Verificar se é rede GPON
                            else if (technology.name === 'Cable' && technology.gpon === true) {
                                if (technology.tv != false || technology.phone != false || technology.internet != false) {
                                    resultado += '<p> SERVIÇOS VIA GPON(FIBRA):<br>';
                                    if (technology.tv === true) {
                                        resultado += '&#9679; TV<br>';
                                    }
                                    if (technology.phone === true) {
                                        resultado += '&#9679; TELEFONE FIXO<br>';
                                    }
                                    if (technology.internet === true) {
                                        resultado += '&#9679; INTERNET<br>';
                                    }
                                    resultado += '</p>';
                                }
                            }
                            // Verificar se é rede Satellite
                            else if (technology.name === 'Satellite') {
                                resultado += '<p> SERVIÇOS VIA SATELLITE / MOVEL:<br>';
                                if (technology.tv === true) {
                                    resultado += '&#9679; TV<br>';
                                }
                                if (technology.phone === true) {
                                    resultado += '&#9679; TELEFONE FIXO<br>';
                                }
                                if (technology.internet === true) {
                                    resultado += '&#9679; INTERNET<br>';
                                }
                                resultado += '</p>';
                            }
                            // Deu ruim, solicita usuario reportar no GITHUB
                            else {
                                resultado += '<span> Ocorreu algum erro, se possivel reporte via <a href="https://github.com/dudu15051505/mapa-claro-beta/issues/">GITHUB</a> informando o CEP e Numero pesquisado para futura verificação.</span>';
                            }
                        }
                        // Gera URL para pegar geocodificação do endereço fornecido
                        // var geocodingUrl = 'https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(logradouro + ', ' + numero + ', ' + bairro + ', ' + cidade + ', ' + uf + ', Brasil');
                        let geocodingUrl = 'https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(logradouro + ' ' + numero + ', ' + cidade + ', ' + uf + ', Brasil');

                        //Debug para ver url gerada
                        console.info('URL geolocation: ' + geocodingUrl);

                        // Consulta URL e gera marcador no mapa
                        fetch(geocodingUrl).then(function (response) {
                            return response.json();
                        }).then(function (data) {
                            // Caso tenha algum url
                            if (data.length > 0) {
                                let firstResult = data[0];
                                let latitude = parseFloat(firstResult.lat);
                                let longitude = parseFloat(firstResult.lon);
                                let customIcon = L.icon({
                                    iconUrl: './img/marker-icon-blue.png',
                                    iconSize: [25, 41],
                                    iconAnchor: [12, 41],
                                    popupAnchor: [0, -41]
                                });
                                // Cria marcador e adiciona no mapa
                                let marker = L.marker([latitude, longitude], {
                                    icon: customIcon
                                }).addTo(map);
                                // Abre popup do marcador
                                marker.bindPopup(resultado).openPopup();
                                // Ajustar o zoom e a posição do mapa para exibir o marcador
                                map.panTo(new L.LatLng(latitude, longitude));
                                map.setView([latitude, longitude], 16);
                            }
                            // Caso não retorno nada na url
                            else {
                                console.error('Endereço não encontrado.');
                                $('#telaerro-conteudo').html(`Endereço não encontrado na base de geolocalização do <a href="https://www.openstreetmap.org/search?query=${encodeURIComponent(logradouro + ', ' + numero + ', ' + cidade + ', ' + uf + ', Brasil')}#map=5/-13.240/-50.383'" target="_blank">OpenStreetMap <img src="./img/osm_icon.svg" style="height: 20px;width: 20px;" /></a> <br>
                                <br>                                                               
                                Dados retornados pela API Claro: <br>
                                <br>
                                ${resultado}
                                `);
                                $('#telaerro').css('display','block');
                                //alert('Endereço não encontrado.');
                            }
                        }).catch(function (error) {
                            // Caso falhe consulta a url por algum erro de conexão/servidor
                            console.error('Erro ao processar a solicitação de geocodificação: ', error);
                            $('#telaerro-conteudo').html(`Erro ao processar a solicitação de geocodificação.`);
                            $('#telaerro').css('display','block');
                            //alert('Erro ao processar a solicitação de geocodificação.');
                        });
                    }
                } else {
                    console.error('Resultado não esperado, codigo: Erro: \n' + JSON.stringify(data, null, 9));
                    $('#telaerro-conteudo').html(`Resultado não esperado no retorno da API. <br> ${JSON.stringify(data, null, 9)}`);
                    $('#telaerro').css('display','block');
                    //alert('Resultado não esperado no retorno da API.');
                }
            },
            error: function (data) {
                console.error('Resultado não esperado no retorno da API, Erro: \n' + JSON.stringify(data, null, 9));
                $('#telaerro-conteudo').html(`Resultado não esperado no retorno da API. <br> ${JSON.stringify(data, null, 9)}`);
                $('#telaerro').css('display','block');
                //alert('Resultado não esperado no retorno da API.');
            }
        });
    }
    // Lidar com o envio do formulário
    $('#formulario').submit(function (event) {
        event.preventDefault();
        consultarViabilidade();
    });	
});
