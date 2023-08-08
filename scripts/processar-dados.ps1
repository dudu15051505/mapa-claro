$githubWorkspace = $env:GITHUB_WORKSPACE
$caminhoRelativo = "scripts/"
$diretorio_raiz = Join-Path $githubWorkspace $caminhoRelativo
$diretorio_trabalho = $githubWorkspace

#$diretorio_trabalho = "/home/runner/work/mapa-claro-beta/mapa-claro-beta/scripts"
#$diretorio_trabalho = "/home/runner/work/mapa-claro/mapa-claro/scripts"
$diretorio_arquivos = "$diretorio_trabalho/dados"
$diretorio_arquivos_manual = "$diretorio_trabalho/dados manuais"
$diretorio_arquivos_erro = "$diretorio_trabalho/erro consulta"
$diretorio_arquivos_processados = "$diretorio_trabalho/processados"
$local_arquivo_locations_data_lista = "$diretorio_arquivos_processados/locations-data-lista.json"
$dados_arquivo_locations_data_lista = Get-Content -Path $local_arquivo_locations_data_lista | Out-String
$dados_arquivo_locations_data_lista_processados = ConvertFrom-Json $dados_arquivo_locations_data_lista
$DateStr = Get-Date -Format "yyyy-MM-dd"

if (!(Test-Path $diretorio_arquivos)) {
	New-Item $diretorio_arquivos -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_manual)) {
	New-Item $diretorio_arquivos_manual -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_erro)) {
	New-Item $diretorio_arquivos_erro -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_processados)) {
	New-Item $diretorio_arquivos_processados -ItemType Directory
}

$nomearquivos = Get-ChildItem -Path $diretorio_arquivos
$nomearquivos_manual = Get-ChildItem -Path $diretorio_arquivos_manual
$nomearquivos_erro = Get-ChildItem -Path $diretorio_arquivos_erro

$csv = Import-Csv "$diretorio_trabalho/latitude-longitude-cidades-powershell.csv"

$GPON = @();
$HFC = @();
$SOBRE = @();
$NADA = @();
$NEUTROGPON = @();
$NEUTROHFC = @();
$ERROAPI = @();

New-Item -Path "$diretorio_arquivos_processados" -Name "locations-gpon.json" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_processados" -Name "locations-sobrepo.json" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_processados" -Name "locations-hfc.json" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_processados" -Name "locations-nada.json" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_processados" -Name "locations-neutrogpon.json" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_processados" -Name "locations-neutrohfc.json" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_processados" -Name "locations-erroapi.json" -ItemType "file" -Value "" -Force

foreach ($row_nomearquivos in $nomearquivos_manual) {
	$arquivo_nome = $row_nomearquivos.NAME.remove(2, 1).insert(2, ";").split(";");
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach ($row_csv in $csv) {		
		if ($row_csv.uf -eq $arquivo_nome[0] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$tem_gpon = 0;
			$tem_hfc = 0;
			$tem_soprepo = 0;
			$tem_gpon_neutro = 0;
			$tem_hfc_neutro = 0;
			$tem_nada = 1;
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			
			foreach ($line in Get-Content $row_nomearquivos) {
				switch ($line) {
					"GPON" { $tem_gpon = 1; $tem_nada = 0; break }
					"HFC" { $tem_hfc = 1; $tem_nada = 0; break }
					"Area Fibra Expansão" { $tem_soprepo = 1; $tem_nada = 0; break }
					"Area Fibra Expans�o" { $tem_soprepo = 1; $tem_nada = 0; break }
					"NEUTRA GPON" { $tem_gpon_neutro = 1; $tem_nada = 0; break }
					"NEUTRA HFC" { $tem_hfc_neutro = 1; $tem_nada = 0; break }
				}
			}
			
			if ($tem_gpon -eq 1) {					
				$GPON += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> GPON"
					color      = "green"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "GPON"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_soprepo -eq 1) {
				$SOBRE += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> Sobreposição HFC e GPON"
					color      = "yellow"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "Sobreposição HFC e GPON"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_hfc -eq 1) {
				$HFC += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> HFC"
					color      = "red"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "HFC"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_gpon_neutro -eq 1) {
				$NEUTROGPON += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> GPON REDE NEUTRA"
					color      = "grey"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "GPON REDE NEUTRA"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_hfc_neutro -eq 1) {
				$NEUTROHFC += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> HFC REDE NEUTRA"
					color      = "violet"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "HFC REDE NEUTRA"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_nada -eq 1) {
				$NADA += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> Sem serviço fixo"
					color      = "black"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "Sem serviço fixo"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
		}
	}	
	
}

# CIDADES VIA CONSULTA AUTOMATICA

foreach ($row_nomearquivos in $nomearquivos) {
	$arquivo_nome = $row_nomearquivos.NAME.split("-");	
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach ($row_csv in $csv) {		
		if ($row_csv.uf -eq $arquivo_nome[0] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$tem_gpon = 0;
			$tem_hfc = 0;
			$tem_soprepo = 0;
			$tem_gpon_neutro = 0;
			$tem_hfc_neutro = 0;
			$tem_nada = 1;
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			
			foreach ($line in Get-Content $row_nomearquivos) {
				switch ($line) {
					"GPON" { $tem_gpon = 1; $tem_nada = 0; break }
					"HFC" { $tem_hfc = 1; $tem_nada = 0; break }
					"Area Fibra Expansão" { $tem_soprepo = 1; $tem_nada = 0; break }
					"Area Fibra Expansao" { $tem_soprepo = 1; $tem_nada = 0; break }
					"Area Fibra Expans�o" { $tem_soprepo = 1; $tem_nada = 0; break }
					"NEUTRA GPON" { $tem_gpon_neutro = 1; $tem_nada = 0; break }
					"NEUTRA HFC" { $tem_hfc_neutro = 1; $tem_nada = 0; break }
				}
			}
			
			if ($tem_gpon -eq 1) {					
				$GPON += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> GPON"
					color      = "green"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "GPON"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_soprepo -eq 1) {
				$SOBRE += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> Sobreposição HFC e GPON"
					color      = "yellow"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "Sobreposição HFC e GPON"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_hfc -eq 1) {
				$HFC += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> HFC"
					color      = "red"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "HFC"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_gpon_neutro -eq 1) {
				$NEUTROGPON += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> GPON REDE NEUTRA"
					color      = "grey"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "GPON REDE NEUTRA"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_hfc_neutro -eq 1) {
				$NEUTROHFC += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> HFC REDE NEUTRA"
					color      = "violet"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "HFC REDE NEUTRA"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
			if ($tem_nada -eq 1) {
				$NADA += @{
					name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> Sem serviço fixo"
					color      = "black"
					latitude   = $latitude
					longitude  = $longitude
					tecnologia = "Sem serviço fixo"
					cidade     = $arquivo_nome[1]
					uf         = $arquivo_nome[0]
				}
			}
		}
	}	
}

foreach ($row_nomearquivos in $nomearquivos_erro) {
	$arquivo_nome = $row_nomearquivos.NAME.split("-");	
	$arquivo_nome_inicio = $arquivo_nome[0].split(" ");
	
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach ($row_csv in $csv) {		
		if ($row_csv.uf -eq $arquivo_nome_inicio[3] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			$ERROAPI += @{
				name       = "$($arquivo_nome[1]), $($arquivo_nome[0]) <br> ERRO na consulta API"
				color      = "orange"
				latitude   = $latitude
				longitude  = $longitude
				tecnologia = "ERRO na consulta API"
				cidade     = $arquivo_nome[1]
				uf         = $arquivo_nome[0]
			}
		}
	}	
}

# Adicionar novos dados ao objeto (exemplo)
$dados_arquivo_locations_data_lista_processados += @{
	"data"            = $DateStr
	"valorCampo"      = $DateStr
	"textoUrl"        = ""
	"url"             = "#"
	"informacaoExtra" = "Consulta automática"
}

$jsonAtualizado = ConvertTo-Json $dados_arquivo_locations_data_lista_processados

$jsonAtualizado | Set-Content -Path $local_arquivo_locations_data_lista

# Convertendo os arrays para JSON
$GPON_JSON = $GPON | ForEach-Object {
	@{
		name       = $_.name
		color      = $_.color
		latitude   = $_.latitude
		longitude  = $_.longitude
		tecnologia = $_.tecnologia
		cidade     = $_.cidade
		uf         = $_.uf
	}
} | ConvertTo-Json -Compress

$HFC_JSON = $HFC | ForEach-Object {
	@{
		name       = $_.name
		color      = $_.color
		latitude   = $_.latitude
		longitude  = $_.longitude
		tecnologia = $_.tecnologia
		cidade     = $_.cidade
		uf         = $_.uf
	}
} | ConvertTo-Json -Compress

$SOBRE_JSON = $SOBRE | ForEach-Object {
	@{
		name       = $_.name
		color      = $_.color
		latitude   = $_.latitude
		longitude  = $_.longitude
		tecnologia = $_.tecnologia
		cidade     = $_.cidade
		uf         = $_.uf
	}
} | ConvertTo-Json -Compress

$NADA_JSON = $NADA | ForEach-Object {
	@{
		name       = $_.name
		color      = $_.color
		latitude   = $_.latitude
		longitude  = $_.longitude
		tecnologia = $_.tecnologia
		cidade     = $_.cidade
		uf         = $_.uf
	}
} | ConvertTo-Json -Compress

$NEUTROGPON_JSON = $NEUTROGPON | ForEach-Object {
	@{
		name       = $_.name
		color      = $_.color
		latitude   = $_.latitude
		longitude  = $_.longitude
		tecnologia = $_.tecnologia
		cidade     = $_.cidade
		uf         = $_.uf
	}
} | ConvertTo-Json -Compress

$NEUTROHFC_JSON = $NEUTROHFC | ForEach-Object {
	@{
		name       = $_.name
		color      = $_.color
		latitude   = $_.latitude
		longitude  = $_.longitude
		tecnologia = $_.tecnologia
		cidade     = $_.cidade
		uf         = $_.uf
	}
} | ConvertTo-Json -Compress

$ERROAPI_JSON = $ERROAPI | ForEach-Object {
	@{
		name       = $_.name
		color      = $_.color
		latitude   = $_.latitude
		longitude  = $_.longitude
		tecnologia = $_.tecnologia
		cidade     = $_.cidade
		uf         = $_.uf
	}
} | ConvertTo-Json -Compress

# Salvar os dados JSON em arquivos
Set-Content -Path "$diretorio_arquivos_processados/locations-gpon.json" $GPON_JSON
Set-Content -Path "$diretorio_arquivos_processados/locations-sobrepo.json" $SOBRE_JSON
Set-Content -Path "$diretorio_arquivos_processados/locations-hfc.json" $HFC_JSON
Set-Content -Path "$diretorio_arquivos_processados/locations-nada.json" $NADA_JSON
Set-Content -Path "$diretorio_arquivos_processados/locations-neutrogpon.json" $NEUTROGPON_JSON
Set-Content -Path "$diretorio_arquivos_processados/locations-neutrohfc.json" $NEUTROHFC_JSON
Set-Content -Path "$diretorio_arquivos_processados/locations-erroapi.json" $ERROAPI_JSON

			
Write-Host "fim"