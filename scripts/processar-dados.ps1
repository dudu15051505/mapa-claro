$diretorio_trabalho = "/home/runner/work/mapa-claro/mapa-claro/scripts"
$diretorio_arquivos = "$diretorio_trabalho/dados"
$diretorio_arquivos_manual = "$diretorio_trabalho/dados manuais"
$diretorio_arquivos_erro = "$diretorio_trabalho/erro consulta"
$diretorio_arquivos_js = "$diretorio_trabalho/js"

if (!(Test-Path $diretorio_arquivos)) {
    New-Item $diretorio_arquivos -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_manual)) {
    New-Item $diretorio_arquivos_manual -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_erro)) {
    New-Item $diretorio_arquivos_erro -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_js)) {
    New-Item $diretorio_arquivos_js -ItemType Directory
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

New-Item -Path "$diretorio_arquivos_js" -Name "locations-gpon.js" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_js" -Name "locations-sobrepo.js" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_js" -Name "locations-hfc.js" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_js" -Name "locations-nada.js" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_js" -Name "locations-neutrogpon.js" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_js" -Name "locations-neutrohfc.js" -ItemType "file" -Value "" -Force
New-Item -Path "$diretorio_arquivos_js" -Name "locations-erroapi.js" -ItemType "file" -Value "" -Force

Add-Content -Path "$diretorio_arquivos_js\locations-gpon.js" "var locations_gpon = ["
Add-Content -Path "$diretorio_arquivos_js\locations-sobrepo.js" "var locations_sobrepo = ["
Add-Content -Path "$diretorio_arquivos_js\locations-hfc.js" "var locations_hfc = ["
Add-Content -Path "$diretorio_arquivos_js\locations-nada.js" "var locations_nada = ["
Add-Content -Path "$diretorio_arquivos_js\locations-neutrogpon.js" "var locations_neutrogpon = ["
Add-Content -Path "$diretorio_arquivos_js\locations-neutrohfc.js" "var locations_neutrohfc = ["
Add-Content -Path "$diretorio_arquivos_js\locations-erroapi.js" "var locations_erroapi = ["

# CIDADES ACERTADAS MANUALMENTE

Add-Content -Path "$diretorio_arquivos_js\locations-gpon.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "$diretorio_arquivos_js\locations-sobrepo.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "$diretorio_arquivos_js\locations-hfc.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "$diretorio_arquivos_js\locations-nada.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "$diretorio_arquivos_js\locations-neutrogpon.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "$diretorio_arquivos_js\locations-neutrohfc.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "$diretorio_arquivos_js\locations-erroapi.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"

foreach($row_nomearquivos in $nomearquivos_manual) {
	$arquivo_nome = $row_nomearquivos.NAME.remove(2,1).insert(2,";").split(";");
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach($row_csv in $csv) {		
		if($row_csv.uf -eq $arquivo_nome[0] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$tem_gpon = 0;
			$tem_hfc = 0;
			$tem_soprepo = 0;
			$tem_gpon_neutro = 0;
			$tem_hfc_neutro = 0;
			$tem_nada = 1;
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			
			foreach($line in Get-Content $row_nomearquivos) {
				switch($line) {
					"GPON"                { $tem_gpon = 1;        $tem_nada = 0; break }
					"HFC"                 { $tem_hfc = 1;         $tem_nada = 0; break }
					"Area Fibra Expansão" { $tem_soprepo = 1;     $tem_nada = 0; break }
					"Area Fibra Expans�o" { $tem_soprepo = 1;     $tem_nada = 0; break }
					"NEUTRA GPON"         { $tem_gpon_neutro = 1; $tem_nada = 0; break }
					"NEUTRA HFC"          { $tem_hfc_neutro = 1;  $tem_nada = 0; break }
				}
			}
			
			if($tem_gpon -eq 1) {					
				$GPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON', color: 'green', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";

			}
			if($tem_soprepo -eq 1) {
				$SOBRE += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sobreposição HFC e GPON', color: 'yellow', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc -eq 1) {
				$HFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC', color: 'red', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_gpon_neutro -eq 1) {
				$NEUTROGPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON REDE NEUTRA', color: 'grey', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc_neutro -eq 1) {
				$NEUTROHFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC REDE NEUTRA', color: 'violet', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_nada -eq 1) {
				$NADA += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sem serviço fixo', color: 'black', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
		}
	}	
}

Add-Content -Path "$diretorio_arquivos_js\locations-gpon.js" $GPON
Add-Content -Path "$diretorio_arquivos_js\locations-sobrepo.js" $SOBRE
Add-Content -Path "$diretorio_arquivos_js\locations-hfc.js" $HFC
Add-Content -Path "$diretorio_arquivos_js\locations-nada.js" $NADA
Add-Content -Path "$diretorio_arquivos_js\locations-neutrogpon.js" $NEUTROGPON
Add-Content -Path "$diretorio_arquivos_js\locations-neutrohfc.js" $NEUTROHFC
Add-Content -Path "$diretorio_arquivos_js\locations-erroapi.js" $ERROAPI

# CIDADES VIA CONSULTA AUTOMATICA

$GPON = @();
$HFC = @();
$SOBRE = @();
$NADA = @();
$NEUTROGPON = @();
$NEUTROHFC = @();
$ERROAPI = @();

Add-Content -Path "$diretorio_arquivos_js\locations-gpon.js" ""
Add-Content -Path "$diretorio_arquivos_js\locations-sobrepo.js" ""
Add-Content -Path "$diretorio_arquivos_js\locations-hfc.js" ""
Add-Content -Path "$diretorio_arquivos_js\locations-nada.js" ""
Add-Content -Path "$diretorio_arquivos_js\locations-neutrogpon.js" ""
Add-Content -Path "$diretorio_arquivos_js\locations-neutrohfc.js" ""
Add-Content -Path "$diretorio_arquivos_js\locations-erroapi.js" ""

Add-Content -Path "$diretorio_arquivos_js\locations-gpon.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "$diretorio_arquivos_js\locations-sobrepo.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "$diretorio_arquivos_js\locations-hfc.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "$diretorio_arquivos_js\locations-nada.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "$diretorio_arquivos_js\locations-neutrogpon.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "$diretorio_arquivos_js\locations-neutrohfc.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "$diretorio_arquivos_js\locations-erroapi.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"

foreach($row_nomearquivos in $nomearquivos) {
	$arquivo_nome = $row_nomearquivos.NAME.split("-");	
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach($row_csv in $csv) {		
		if($row_csv.uf -eq $arquivo_nome[0] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$tem_gpon = 0;
			$tem_hfc = 0;
			$tem_soprepo = 0;
			$tem_gpon_neutro = 0;
			$tem_hfc_neutro = 0;
			$tem_nada = 1;
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			
			foreach($line in Get-Content $row_nomearquivos) {
				switch($line) {
					"GPON"                { $tem_gpon = 1;        $tem_nada = 0; break }
					"HFC"                 { $tem_hfc = 1;         $tem_nada = 0; break }
					"Area Fibra Expansão" { $tem_soprepo = 1;     $tem_nada = 0; break }
					"Area Fibra Expans�o" { $tem_soprepo = 1;     $tem_nada = 0; break }
					"NEUTRA GPON"         { $tem_gpon_neutro = 1; $tem_nada = 0; break }
					"NEUTRA HFC"          { $tem_hfc_neutro = 1;  $tem_nada = 0; break }
				}
			}
			
			if($tem_gpon -eq 1) {					
				$GPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON', color: 'green', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";

			}
			if($tem_soprepo -eq 1) {
				$SOBRE += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sobreposição HFC e GPON', color: 'yellow', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc -eq 1) {
				$HFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC', color: 'red', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_gpon_neutro -eq 1) {
				$NEUTROGPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON REDE NEUTRA', color: 'grey', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc_neutro -eq 1) {
				$NEUTROHFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC REDE NEUTRA', color: 'violet', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_nada -eq 1) {
				$NADA += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sem serviço fixo', color: 'black', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
		}
	}	
}

if(!($GPON.Count -eq 0)) {
	$GPON[$GPON.Count-1] = $GPON[$GPON.Count-1] -replace ".$"
}
if(!($HFC.Count -eq 0)) {
	$HFC[$HFC.Count-1] = $HFC[$HFC.Count-1] -replace ".$"
}
if(!($SOBRE.Count -eq 0)) {
	$SOBRE[$SOBRE.Count-1] = $SOBRE[$SOBRE.Count-1] -replace ".$"
}
if(!($NADA.Count -eq 0)) {
	$NADA[$NADA.Count-1] = $NADA[$NADA.Count-1] -replace ".$"
}
if(!($NEUTROGPON.Count -eq 0)) {
	$NEUTROGPON[$NEUTROGPON.Count-1] = $NEUTROGPON[$NEUTROGPON.Count-1] -replace ".$"
}
if(!($NEUTROHFC.Count -eq 0)) {
	$NEUTROHFC[$NEUTROHFC.Count-1] = $NEUTROHFC[$NEUTROHFC.Count-1] -replace ".$"
}

foreach($row_nomearquivos in $nomearquivos_erro) {
	$arquivo_nome = $row_nomearquivos.NAME.split("-");	
	$arquivo_nome_inicio = $arquivo_nome[0].split(" ");
	
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach($row_csv in $csv) {		
		if($row_csv.uf -eq $arquivo_nome_inicio[3] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			$ERROAPI += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome_inicio[3]+" <br> ERRO na consulta API', color: 'orange', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
		}
	}	
}
if(!($ERROAPI.Count -eq 0)) {
	$ERROAPI[$ERROAPI.Count-1] = $ERROAPI[$ERROAPI.Count-1] -replace ".$"
}

Add-Content -Path "$diretorio_arquivos_js\locations-gpon.js" $GPON
Add-Content -Path "$diretorio_arquivos_js\locations-sobrepo.js" $SOBRE
Add-Content -Path "$diretorio_arquivos_js\locations-hfc.js" $HFC
Add-Content -Path "$diretorio_arquivos_js\locations-nada.js" $NADA
Add-Content -Path "$diretorio_arquivos_js\locations-neutrogpon.js" $NEUTROGPON
Add-Content -Path "$diretorio_arquivos_js\locations-neutrohfc.js" $NEUTROHFC
Add-Content -Path "$diretorio_arquivos_js\locations-erroapi.js" $ERROAPI
			
Add-Content -Path "$diretorio_arquivos_js\locations-gpon.js" "];"
Add-Content -Path "$diretorio_arquivos_js\locations-sobrepo.js" "];"
Add-Content -Path "$diretorio_arquivos_js\locations-hfc.js" "];"
Add-Content -Path "$diretorio_arquivos_js\locations-nada.js" "];"
Add-Content -Path "$diretorio_arquivos_js\locations-neutrogpon.js" "];"
Add-Content -Path "$diretorio_arquivos_js\locations-neutrohfc.js" "];"
Add-Content -Path "$diretorio_arquivos_js\locations-erroapi.js" "];"

Write-Host "fim"