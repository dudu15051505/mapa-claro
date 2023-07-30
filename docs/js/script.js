window.onload = function() {
    function loadDataList() {
        const request = new XMLHttpRequest();
        request.open('GET', './js/locations/locations-data-lista.json', false);
        request.send(null);

        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            data.forEach((value, index) => {
            let tempDate = new Date(value.data);
            let formattedDate = `${tempDate.getDate() + 1}/${tempDate.getMonth() + 1}/${tempDate.getFullYear()}`;
            let option = new Option(
                value.informacaoExtra ? `${formattedDate} - ${value.informacaoExtra}` : `${formattedDate}`,
                value.valorCampo
            );
            document.getElementById('lista-data-dados').appendChild(option);

            const dadosInfoElement = document.getElementById('dados-info');
            const spanElement = document.createElement('span');
            spanElement.setAttribute('id', `dados-info-${index}`);
            spanElement.style.display = 'none';

            const anchorElement = document.createElement('a');
            anchorElement.setAttribute('href', value.url);
            anchorElement.setAttribute('target', '_blank');
            anchorElement.textContent = value.textoUrl;

            spanElement.appendChild(anchorElement);
            dadosInfoElement.appendChild(spanElement);
            });

            const listaDataDadosElement = document.getElementById('lista-data-dados');

            if (verData) {
                listaDataDadosElement.value = verData;
            } else {
                const lastOption = listaDataDadosElement.options[listaDataDadosElement.options.length - 1];
                lastOption.selected = true;
            }

            const selectedIndex = listaDataDadosElement.selectedIndex;
            const dadosInfoElement = document.getElementById(`dados-info-${selectedIndex}`);
            dadosInfoElement.style.display = 'block';
        } else {
            console.error('Erro ao carregar lista de dados passados.');
            //alert('Erro ao carregar lista de dados passados.');
            const mensagemErro = 'Erro ao carregar lista de dados passados.';
            const telaErroConteudoElement = document.getElementById('telaerro-conteudo');
            const telaErroElement = document.getElementById('telaerro');

            telaErroConteudoElement.textContent = mensagemErro;
            telaErroElement.style.display = 'block';
        }
    }

    loadDataList();

    const map = L.map('map').setView([-14.235004, -51.925280], 5);

    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 18,
    });

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Imagery &copy; <a href="https://www.arcgis.com/" target="_blank">ArcGIS</a>',
        maxZoom: 18,
    });

    const stamenTerrainLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0" target="_blank">CC BY SA</a>',
        maxZoom: 18,
    });

    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
        maxZoom: 18
    });

    const cartoDBPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'
    });

    const cartoDBVoyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'
    });

    const cartoDBPositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'
    });

    const cartoDBVoyagerNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.carto.com/">CartoDB</a> contributors'
    });

    const cartoDBDarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'
    });

    const esriWorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
        maxZoom: 18
    });

    const esriWorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
        maxZoom: 18
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const baseLayers = {
        'OpenStreetMap': osmLayer,
        'Satélite': satelliteLayer,
        'Stamen Terrain': stamenTerrainLayer,
        "Esri World Imagery": esriWorldImagery,
        "CartoDB Positron": cartoDBPositron,
        "CartoDB Voyager": cartoDBVoyager,
        "CartoDB Positron (Sem rótulos)": cartoDBPositronNoLabels,
        "CartoDB Voyager (Sem rótulos)": cartoDBVoyagerNoLabels,
        "CartoDB Dark Matter (Sem rótulos)": cartoDBDarkMatterNoLabels,
        "Esri World Street Map": esriWorldStreetMap,
        "Esri World Topo Map": esriWorldTopoMap
    };
    
    osmLayer.addTo(map);
    
    const locationsGponLayer = L.layerGroup();
    const locationsHfcLayer = L.layerGroup();
    const locationsSobreproLayer = L.layerGroup();
    const locationsGponNeutroLayer = L.layerGroup();
    const locationsHfcNeutroLayer = L.layerGroup();
    const locationsSemNadaLayer = L.layerGroup();
    const locationsErroApiLayer = L.layerGroup();

    async function fetchJSON(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao carregar dados.');
            }
            return response.json();
        } catch (error) {
            console.error(error.message);
            const mensagemErro = 'Erro ao carregar dados.';
            const telaErroConteudoElement = document.getElementById('telaerro-conteudo');
            const telaErroElement = document.getElementById('telaerro');
            telaErroConteudoElement.textContent = mensagemErro;
            telaErroElement.style.display = 'block';
        }
    }
    
    async function addMarkersAndLayers(url, type, color, layerGroup, somatorioId) {
        try {
            const conteudo = await fetchJSON(url);
            locations.push({
                type,
                color,
                data: conteudo
            });
            document.getElementById(somatorioId).innerHTML = `<span class="center">${conteudo.length}</span>`;
    
            const iconUrl = `./img/marker-icon-${color}.png`;
            const customIcon = L.icon({
                iconUrl: iconUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [0, -41]
            });
    
            conteudo.forEach(function (loc) {
                const marker = L.marker([loc.latitude, loc.longitude], {
                    icon: customIcon
                }).bindPopup(loc.name);
    
                layerGroup.addLayer(marker);
            });
    
            if (conteudo.length > 0) {
                switch (type) {
                case 'GPON':
                    locationsGponLayer.addLayer(layerGroup);
                    break;
                case 'HFC':
                    locationsHfcLayer.addLayer(layerGroup);
                    break;
                case 'Sobreposição':
                    locationsSobreproLayer.addLayer(layerGroup);
                    break;
                case 'GPON Rede neutra':
                    locationsGponNeutroLayer.addLayer(layerGroup);
                    break;
                case 'HFC Rede neutra':
                    locationsHfcNeutroLayer.addLayer(layerGroup);
                    break;
                case 'Sem serviço FIXO':
                    locationsSemNadaLayer.addLayer(layerGroup);
                    break;
                case 'ERRO Consulta API':
                    locationsErroApiLayer.addLayer(layerGroup);
                    break;
                }
            }
        } catch (error) {
            document.getElementById('telaerro-conteudo').textContent = `Erro ao carregar dados: ${error}`;
            document.getElementById('telaerro').style.display = 'block';
        }
    }

    var locations = [];

    function addLayerToMap(layer) {
        layer.addTo(map);
    }
    
    const getJsonPath = (verData, filename) =>
    verData ? `./js/locations/old/${verData}/${filename}` : `./js/locations/${filename}`;
    
    const fetchPromises = [
        addMarkersAndLayers(getJsonPath(verData, "locations-gpon.json"), "GPON", "green", L.layerGroup(), 'somatorio-gpon'),
        addMarkersAndLayers(getJsonPath(verData, "locations-hfc.json"), "HFC", "red", L.layerGroup(), 'somatorio-hfc'),
        addMarkersAndLayers(getJsonPath(verData, "locations-sobrepo.json"), "Sobreposição", "yellow", L.layerGroup(), 'somatorio-sobre'),
        addMarkersAndLayers(getJsonPath(verData, "locations-neutrogpon.json"), "GPON Rede neutra", "grey", L.layerGroup(), 'somatorio-neutragpon'),
        addMarkersAndLayers(getJsonPath(verData, "locations-neutrohfc.json"), "HFC Rede neutra", "violet", L.layerGroup(), 'somatorio-neutrahfc'),
        addMarkersAndLayers(getJsonPath(verData, "locations-nada.json"), "Sem serviço FIXO", "black", L.layerGroup(), 'somatorio-nada'),
        addMarkersAndLayers(getJsonPath(verData, "locations-erroapi.json"), "ERRO Consulta API", "orange", L.layerGroup(), 'somatorio-erroapi')
    ];
    
    Promise.all(fetchPromises)
    .then(layers => {
        addLayerToMap(locationsGponLayer);
        addLayerToMap(locationsHfcLayer);
        addLayerToMap(locationsSobreproLayer);
        addLayerToMap(locationsGponNeutroLayer);
    })
    .catch(error => {
        document.getElementById('telaerro-conteudo').textContent = `Erro ao carregar dados: ${error}`;
        document.getElementById('telaerro').style.display = 'block';
    });

    const overlayMaps = {
        'GPON <img height="20" width="15" src="./img/marker-icon-green.png" alt="Marcador GPON"/>': locationsGponLayer,
        'HFC <img height="20" width="15" src="./img/marker-icon-red.png" alt="Marcador HFC"/>': locationsHfcLayer,
        'Sobreposição <img height="20" width="15" src="./img/marker-icon-yellow.png" alt="Marcador Sobreposição"/>': locationsSobreproLayer,
        'GPON Rede neutra <img height="20" width="15" src="./img/marker-icon-grey.png" alt="Marcador GPON Rede Neutra"/>': locationsGponNeutroLayer,
        'HFC Rede neutra <img height="20" width="15" src="./img/marker-icon-violet.png" alt="Marcador HFC Rede Neutra"/>': locationsHfcNeutroLayer,
        'Sem serviço FIXO <img height="20" width="15" src="./img/marker-icon-black.png" alt="Marcador Sem serviço FIXO"/>': locationsSemNadaLayer,
        'ERRO Consulta API <img height="20" width="15" src="./img/marker-icon-orange.png" alt="Marcador ERRO Consulta API"/>': locationsErroApiLayer
    };

    L.control.layers(baseLayers, overlayMaps).addTo(map);

    function validarCampos() {
        const cep = document.getElementById('cep').value;
        const numero = document.getElementById('numero').value;
        if (cep.length !== 8) {
            document.getElementById('telaerro-conteudo').innerHTML = 'O campo CEP deve conter 8 números.';
            document.getElementById('telaerro').style.display = 'block';
            return false;
        }
        if (numero.length < 1 || numero.length > 9) {
            document.getElementById('telaerro-conteudo').innerHTML = 'O campo Número deve conter de 1 a 9 números.';
            document.getElementById('telaerro').style.display = 'block';
            return false;
        }
        return true;
    }

    const urls = [
        `./img/loading0.gif`, 
        `./img/loading1.gif`, 
        `./img/loading2.gif`
    ];
    
    const loadAjaxImg = document.getElementById('loadAjaxImg');

    async function consultarViabilidade() {

        loadAjaxImg.setAttribute('src', urls[Math.floor(Math.random() * urls.length)]);

		document.getElementById('telaerro').style.display = 'none';
		document.getElementById('loadAjax').style.display = 'block';

        if (!validarCampos()) {
            return;
        }
        const cep = document.getElementById('cep').value;
        const numero = document.getElementById('numero').value;
        const url = `https://api.amxrest.net/viability/${cep}/${numero}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const dadosApiClaro = await response.json();

                let logradouro = '';
                let bairro = '';
                let cidade = '';
                let uf = '';

                try {
                    const viacepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    if (viacepResponse.ok) {
                        const dadosViacep = await viacepResponse.json();
                        logradouro = dadosViacep.logradouro || dadosApiClaro.data.logradouro;
                        bairro = dadosViacep.bairro || dadosApiClaro.data.bairro;
                        cidade = dadosViacep.localidade || dadosApiClaro.data.cidade;
                        uf = dadosViacep.uf || dadosApiClaro.data.uf;
                    } else {
                        console.error('Erro ao carregar dados do viacep, fallback para dados fornecidos pela própria API claro.');
                        logradouro = dadosApiClaro.data.logradouro;
                        bairro = dadosApiClaro.data.bairro;
                        cidade = dadosApiClaro.data.cidade;
                        uf = dadosApiClaro.data.uf;
                        numero = dadosApiClaro.data.number;
                    }
                } catch (viacepError) {
                    console.error('Erro ao carregar dados do viacep, fallback para dados fornecidos pela própria API claro.', viacepError);
                    logradouro = dadosApiClaro.data.logradouro;
                    bairro = dadosApiClaro.data.bairro;
                    cidade = dadosApiClaro.data.cidade;
                    uf = dadosApiClaro.data.uf;
                    numero = dadosApiClaro.data.number;
                }

                let resultado = `<span> Localização aproximada <br> `;
                resultado += `Ver no <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${logradouro}, ${numero}, ${cidade}, ${uf}, Brasil`)}" target="_blank"> Google Maps <img src="./img/google_maps_icon.png" /></a> </span> <br>`;
                resultado += `Consulta oficial disponível na <a href="https://planos.claro.com.br/monte-sua-combinacao?cep=${cep}&number=${numero}" target="_blank">CLARO</a>`;
                resultado += `<p>Endereço: ${logradouro}, ${numero}, ${bairro}, ${cidade}, ${uf}, Brasil</p>`;

                for (const technology of dadosApiClaro.data.technologies) {
                    let tipoRede = null;
                    const servicosDisponiveis = [];

                    if (dadosApiClaro.data.cableNodeID === 'GPONAVTAL') {
                        tipoRede = 'REDE NEUTRA VTAL';
                    } else if (dadosApiClaro.data.cableNodeID === 'GPONAATC') {
                        tipoRede = 'REDE NEUTRA ATC';
                    } else {
                        tipoRede = 'HFC (COAXIAL)';
                        if (technology.gpon) {
                            tipoRede = 'GPON (FIBRA)';
                        }
                    }

                    if (technology.name === 'Cable') {
                        if (technology.tv)
                            servicosDisponiveis.push('TV');
                        if (technology.phone)
                            servicosDisponiveis.push('TELEFONE FIXO');
                        if (technology.internet)
                            servicosDisponiveis.push('INTERNET');
                    }

                    if (technology.name === 'Satellite') {
                        tipoRede = 'SATELLITE / MÓVEL';
                        if (technology.tv)
                            servicosDisponiveis.push('TV');
                        if (technology.phone)
                            servicosDisponiveis.push('TELEFONE FIXO');
                        if (technology.internet)
                            servicosDisponiveis.push('INTERNET');
                    }

                    if (servicosDisponiveis.length > 0) {
                        resultado += `<p> SERVIÇOS VIA ${tipoRede}:<br>`;
                        for (const servico of servicosDisponiveis) {
                            resultado += `&#9679; ${servico}<br>`;
                        }
                        resultado += `</p>`;
                    } else {
                        resultado += `<span> Ocorreu algum erro, se possível reporte via <a href="https://github.com/dudu15051505/mapa-claro-beta/issues/" target="_blank">GITHUB</a> informando o CEP e Numero pesquisado para futura verificação.</span>`;
                    }
                }

                try {
                    const geocodingResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${logradouro} ${numero}, ${cidade}, ${uf}, Brasil`)}`);
                    if (geocodingResponse.ok) {
                        const data = await geocodingResponse.json();
                        if (data.length > 0) {
                            const firstResult = data[0];
                            const latitude = parseFloat(firstResult.lat);
                            const longitude = parseFloat(firstResult.lon);
                            const customIcon = L.icon({
                                iconUrl: './img/marker-icon-blue.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [0, -41]
                            });
                            const marker = L.marker([latitude, longitude], {
                                icon: customIcon
                            }).addTo(map);
                            marker.bindPopup(resultado).openPopup();
                            map.panTo(new L.LatLng(latitude, longitude));
                            map.setView([latitude, longitude], 16);4
                        } else {
                            console.error('Endereço não encontrado.');
                            document.getElementById('telaerro-conteudo').innerHTML = `<b>Endereço não encontrado na base de geolocalização <a href="${geocodingResponse.url}#map=5/-13.240/-50.383" target="_blank">OpenStreetMap <img src="./img/osm_icon.svg" style="height: 20px;width: 20px;" /></a></b> <br><br>Dados retornados pela API Claro: <br><br> ${resultado}`;
                            document.getElementById('telaerro').style.display = 'block';
                        }
                    } else {
                        console.error('Erro ao processar a solicitação de geocodificação:', geocodingResponse.status, '-', geocodingResponse.statusText);
                        document.getElementById('telaerro-conteudo').innerHTML = 'Erro ao processar a solicitação de geocodificação.';
                        document.getElementById('telaerro').style.display = 'block';
                    }
                } catch (geocodingError) {
                    console.error('Erro ao processar a solicitação de geocodificação:', geocodingError);
                    document.getElementById('telaerro-conteudo').innerHTML = 'Erro ao processar a solicitação de geocodificação.';
                    document.getElementById('telaerro').style.display = 'block';
                }

            } else {
                console.error(`Erro ao consultar a API: ${response.status} - ${response.statusText}`);
                document.getElementById('telaerro-conteudo').innerHTML = 'Erro ao consultar a API.';
                document.getElementById('telaerro').style.display = 'block';
            }
        } catch (error) {
            console.error('Erro ao processar a solicitação:', error);
            document.getElementById('telaerro-conteudo').innerHTML = 'Erro ao processar a solicitação.';
            document.getElementById('telaerro').style.display = 'block';
        }

        document.getElementById('loadAjax').style.display = 'none';
    }

    document.getElementById('formulario').addEventListener('submit', function (event) {
        event.preventDefault();
        consultarViabilidade();
    });
};