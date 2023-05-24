$diretorio_arquivos = ".\dados"
$nomearquivos = Get-ChildItem -Path $diretorio_arquivos

$csv = Import-Csv "latitude-longitude-cidades-powershell.csv"

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
			Write-Host Get-Content $row_nomearquivos;
			$tem_gpon = 0;
			$tem_hfc = 0;
			$tem_soprepo = 0;
			$tem_nada = 1;
			
			foreach($line in Get-Content $row_nomearquivos) {
				Write-Host "texto aquivo: ";
				Write-Host $line
				Write-Host "--------------";
				
				if($line -match "GPON"){
					$tem_gpon = 1;
					$tem_nada = 0;
				}
				if($line -match "HFC"){
					$tem_hfc = 1;
					$tem_nada = 0;
				}
				if($line -match "Area Fibra Expans�o"){
					$tem_soprepo = 1;
					$tem_nada = 0;
				}
			}
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			$conteudo = $null;
			if($tem_gpon -eq 1) {
					
				$conteudo = "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON', color: 'green', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
				Add-Content -Path "saida-powershell.txt" $conteudo
			}
			elseif($tem_soprepo -eq 1) {
				$conteudo = "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sobreposição HFC e GPON', color: 'yellow', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
				Add-Content -Path "saida-powershell.txt" $conteudo
			}
			elseif($tem_hfc -eq 1) {
				$conteudo = "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC', color: 'red', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
				Add-Content -Path "saida-powershell.txt" $conteudo
			}
			elseif($tem_nada -eq 1) {
				$conteudo = "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Não tem serviço fixo', color: 'black', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
				Add-Content -Path "saida-powershell.txt" $conteudo
			}	
		}
	
	}	
}
Write-Host "fim"