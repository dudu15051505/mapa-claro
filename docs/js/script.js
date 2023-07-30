$(window).on(`load`, function() {
    let map = L.map('map').setView([-14.235004, -51.925280], 5);

    let osmLayer = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution: `Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors`,
        maxZoom: 18,
    });
    let satelliteLayer = L.tileLayer(`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`, {
        attribution: `Imagery &copy; <a href="https://www.arcgis.com/" target="_blank">ArcGIS</a>`,
        maxZoom: 18,
    });
    let cartoDarkLayer = L.tileLayer(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`, {
        attribution: `Map data &copy; <a href ="https://carto.com/" target="_blank">CARTO</a>`,
        maxZoom: 18,
    });
    let cartoVoyagerLayer = L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `Map data &copy; <a href="https://carto.com/" target="_blank">CARTO</a>`,
        maxZoom: 18,
    });
    let stamenTerrainLayer = L.tileLayer(`https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png`, {
        attribution: `Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0" target="_blank">CC BY SA</a>`,
        maxZoom: 18,
    });

    let baseLayers = {
        "OpenStreetMap": osmLayer,
        "Satélite": satelliteLayer,
        "Carto Dark": cartoDarkLayer,
        "Carto Voyager": cartoVoyagerLayer,
        "Stamen Terrain": stamenTerrainLayer
    };

    osmLayer.addTo(map);

    let locationsGponLayer = L.layerGroup();
    let locationsHfcLayer = L.layerGroup();
    let locationsSobreproLayer = L.layerGroup();
    let locationsGponNeutroLayer = L.layerGroup();
    let locationsHfcNeutroLayer = L.layerGroup();
    let locationsSemNadaLayer = L.layerGroup();
    let locationsErroApiLayer = L.layerGroup();

    let locations = [{
            type: "GPON",
            color: "green",
            data: locationsGpon
        }, {
            type: "HFC",
            color: "red",
            data: locationsHfc
        }, {
            type: "Sobreposição",
            color: "yellow",
            data: locationsSobrepro
        }, {
            type: "GPON Rede neutra",
            color: "grey",
            data: locationsGponNeutro
        }, {
            type: "HFC Rede neutra",
            color: "violet",
            data: locationsHfcNeutro
        }, {
            type: "Sem serviço FIXO",
            color: "black",
            data: locationsSemNada
        }, {
            type: "ERRO Consulta API",
            color: "orange",
            data: locationsErroApi
        }
    ];
    
    locations.forEach(function (location) {
        let layerGroup = L.layerGroup();

        location.data.forEach(function (location) {
            let iconUrl = `./img/marker-icon-${location.color}.png`;
            let customIcon = L.icon({
                iconUrl: iconUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [0, -41]
            });

            let marker = L.marker([location.latitude, location.longitude], {
                icon: customIcon
            }).bindPopup(location.name);

            layerGroup.addLayer(marker);
        });

        if (location.data.length > 0) {
            switch (location.type) {
            case "GPON":
                locationsGponLayer.addLayer(layerGroup);
                break;
            case "HFC":
                locationsHfcLayer.addLayer(layerGroup);
                break;
            case "Sobreposição":
                locationsSobreproLayer.addLayer(layerGroup);
                break;
            case "GPON Rede neutra":
                locationsGponNeutroLayer.addLayer(layerGroup);
                break;
            case "HFC Rede neutra":
                locationsHfcNeutroLayer.addLayer(layerGroup);
                break;
            case "Sem serviço FIXO":
                locationsSemNadaLayer.addLayer(layerGroup);
                break;
            case "ERRO Consulta API":
                locationsErroApiLayer.addLayer(layerGroup);
                break;
            }
        }
    });

    let overlayMaps = {
        'GPON <img height="20" width="15" src="./img/marker-icon-green.png" alt="Marcador GPON"/>': locationsGponLayer,
        'HFC <img height="20" width="15" src="./img/marker-icon-red.png" alt="Marcador HFC"/>': locationsHfcLayer,
        'Sobreposição <img height="20" width="15" src="./img/marker-icon-yellow.png" alt="Marcador Sobreposição"/>': locationsSobreproLayer,
        'GPON Rede neutra <img height="20" width="15" src="./img/marker-icon-grey.png" alt="Marcador GPON Rede Neutra"/>': locationsGponNeutroLayer,
        'HFC Rede neutra <img height="20" width="15" src="./img/marker-icon-violet.png" alt="Marcador HFC Rede Neutra"/>': locationsHfcNeutroLayer,
        'Sem serviço FIXO <img height="20" width="15" src="./img/marker-icon-black.png" alt="Marcador Sem serviço FIXO"/>': locationsSemNadaLayer,
        'ERRO Consulta API <img height="20" width="15" src="./img/marker-icon-orange.png" alt="Marcador ERRO Consulta API"/>': locationsErroApiLayer
    };
    
    locationsGponLayer.addTo(map);
    locationsHfcLayer.addTo(map);
    locationsSobreproLayer.addTo(map);
    locationsGponNeutroLayer.addTo(map);

    L.control.layers(baseLayers, overlayMaps).addTo(map);

    $(`#somatorio-gpon`).html(`<span class = "center"> ${locationsGpon.length}</span>`);
    $(`#somatorio-hfc`).html(`<span class = "center" > ${locationsHfc.length}</span>`);
    $(`#somatorio-sobre`).html(`<span class = "center" > ${locationsSobrepro.length}</span>`);
    $(`#somatorio-neutragpon`).html(`<span class = "center" > ${locationsGponNeutro.length}</span>`);
    $(`#somatorio-neutrahfc`).html(`<span class = "center" > ${locationsHfcNeutro.length}</span>`);
    $(`#somatorio-nada`).html(`<span class = "center" > ${locationsSemNada.length}</span>`);
    $(`#somatorio-erroapi`).html(`<span class = "center" > ${locationsErroApi.length}</span>`);

    function validarCampos() {
        let cep = $(`#cep`).val();
        let numero = $(`#numero`).val();
        if (cep.length !== 8) {
            //alert(`O campo CEP deve conter 8 números.`);
            $(`#telaerro-conteudo`).html(`O campo CEP deve conter 8 números.`);
            $(`#telaerro`).show();
            return false;
        }
        if (numero.length < 1 || numero.length > 9) {
            //alert(`O campo Número deve conter de 1 a 9 números.`);
            $(`#telaerro-conteudo`).html(`O campo Número deve conter de 1 a 9 números.`);
            $(`#telaerro`).show();
            return false;
        }
        return true;
    }

    function consultarViabilidade() {
        if (!validarCampos()) {
            return;
        }
        let cep = $(`#cep`).val();
        let numero = $(`#numero`).val();
        let url = `https://api.amxrest.net/viability/${cep}/${numero}`;
        $.ajax({
            url: url,
            type: `GET`,
            dataType: `json`,
            cache: false,
            async: true,
            success: function (dadosApiClaro) {
                if (dadosApiClaro.statusCode == 200) {
                    let logradouro = '';
                    let bairro = '';
                    let cidade = '';
                    let uf = '';

                    $.ajax({
                        url: `https://viacep.com.br/ws/${cep}/json/`,
                        type: 'GET',
                        dataType: 'json',
                        cache: false,
                        async: false,
                        success: function (dadosViacep) {
                            logradouro = dadosViacep.logradouro || dadosApiClaro.data.logradouro;
                            bairro = dadosViacep.bairro || dadosApiClaro.data.bairro;
                            cidade = dadosViacep.localidade || dadosApiClaro.data.cidade;
                            uf = dadosViacep.uf || dadosApiClaro.data.uf;
                        },
                        error: function () {
                            logradouro = dadosApiClaro.data.logradouro;
                            bairro = dadosApiClaro.data.bairro;
                            cidade = dadosApiClaro.data.cidade;
                            uf = dadosApiClaro.data.uf;
                            numero = dadosApiClaro.data.number;

                            console.error('Erro ao carregar dados do viacep, fallback para dados fornecidos pela própria api claro.');
                        }
                    });

                    let resultado = `<span> Localização aproximada <br> `;
                    resultado += `Ver no <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${logradouro}, ${numero}, ${cidade}, ${uf}, Brasil`)}" target="_blank"> Google Maps <img src="./img/google_maps_icon.png" /></a> </span> <br>`;
                    resultado += `Consulta oficial disponível na <a href="https://planos.claro.com.br/monte-sua-combinacao?cep=${cep}&number=${numero}" target="_blank">CLARO</a>`;
                    resultado += `<p>Endereço: ${logradouro}, ${numero}, ${bairro}, ${cidade}, ${uf}, Brasil</p>`;

                    $.each(dadosApiClaro.data.technologies, function (index, technology) {
                        let tipoRede = null;
                        let servicosDisponiveis = [];
                    
                        if (dadosApiClaro.data.cableNodeID === "GPONAVTAL") {
                            tipoRede = "REDE NEUTRA VTAL";
                        } else if (dadosApiClaro.data.cableNodeID === "GPONAATC") {
                            tipoRede = "REDE NEUTRA ATC";
                        } else {
                            tipoRede = "HFC (COAXIAL)";
                            if (technology.gpon) {
                                tipoRede = "GPON (FIBRA)";
                            }
                        }
                    
                        if (technology.name === "Cable") {
                            if (technology.tv)
                                servicosDisponiveis.push("TV");
                            if (technology.phone)
                                servicosDisponiveis.push("TELEFONE FIXO");
                            if (technology.internet)
                                servicosDisponiveis.push("INTERNET");
                        }
                    
                        if (technology.name === "Satellite") {
                            tipoRede = "SATELLITE / MÓVEL";
                            if (technology.tv)
                                servicosDisponiveis.push("TV");
                            if (technology.phone)
                                servicosDisponiveis.push("TELEFONE FIXO");
                            if (technology.internet)
                                servicosDisponiveis.push("INTERNET");
                        }
                    
                        if (servicosDisponiveis.length > 0) {
                            resultado += `<p> SERVIÇOS VIA ${tipoRede}:<br>`;
                            servicosDisponiveis.forEach(function (servico) {
                                resultado += `&#9679; ${servico}<br>`;
                            });
                            resultado += `</p>`;
                        } else {
                            resultado += `<span> Ocorreu algum erro, se possível reporte via <a href="https://github.com/dudu15051505/mapa-claro-beta/issues/" target="_blank">GITHUB</a> informando o CEP e Numero pesquisado para futura verificação.</span>`;
                        }
                    });
                    
                    // let geocodingUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${logradouro} ${numero}, ${bairro}, ${cidade}, ${uf}, Brasil`)}`;
                    let geocodingUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${logradouro} ${numero}, ${cidade}, ${uf}, Brasil `)}`;

                    $.ajax({
                        url: geocodingUrl,
                        type: `GET`,
                        dataType: `json`,
                        cache: false,
                        async: true,
                        success: function (data) {
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
                                let marker = L.marker([latitude, longitude], {
                                    icon: customIcon
                                }).addTo(map);
                                marker.bindPopup(resultado).openPopup();
                                map.panTo(new L.LatLng(latitude, longitude));
                                map.setView([latitude, longitude], 16);
                            }
                            else {
                                console.error('Endereço não encontrado.');
                                $('#telaerro-conteudo').html(`<b>Endereço não encontrado na base de geolocalização <a href="${geocodingUrl}#map=5/-13.240/-50.383" target="_blank">OpenStreetMap <img src="./img/osm_icon.svg" style="height: 20px;width: 20px;" /></a></b> <br><br>Dados retornados pela API Claro: <br><br> ${resultado}`);
                                $('#telaerro').show();
                            }
                        },
                        error: function (error) {
                            console.error('Erro ao processar a solicitação de geocodificação: ', error);
                            $('#telaerro-conteudo').html('Erro ao processar a solicitação de geocodificação. <br>' + error);
                            $('#telaerro').show();
                        }
                    });

                } else {
                    console.error(`Resultado não esperado no retorno da API, Erro: \n ${JSON.stringify(data, null, 9)}`);
                    $(`#telaerro-conteudo`).html(`Resultado não esperado no retorno da API. <br> ${JSON.stringify(data, null, 9)}`);
                    $(`#telaerro`).show();
                    //alert(`Resultado não esperado no retorno da API.`);
                }
            },
            error: function (data) {
                console.error(`Resultado não esperado no retorno da API, Erro: \n ${JSON.stringify(data, null, 9)}`);
                $(`#telaerro-conteudo`).html(`Resultado não esperado no retorno da API. <br> ${JSON.stringify(data, null, 9)}`);
                $(`#telaerro`).show();
                //alert(`Resultado não esperado no retorno da API.`);
            }
        });
    }
    $(`#formulario`).submit(function (event) {
        event.preventDefault();
        consultarViabilidade();
    });	
});
