#$diretorio_raiz = "/home/runner/work/mapa-claro-beta/mapa-claro-beta"
$diretorio_raiz = "/home/runner/work/mapa-claro/mapa-claro"
$diretorio_trabalho = "$diretorio_raiz/scripts"
$diretorio_site = "$diretorio_raiz/docs"

$DateStr = Get-Date -Format "yyyy-MM-dd"

if (!(Test-Path "$diretorio_trabalho/bk/$DateStr")) {
    New-Item "$diretorio_trabalho/bk/$DateStr" -ItemType Directory
}

if (!(Test-Path "$diretorio_site/js/locations/old/$DateStr")) {
    New-Item "$diretorio_site/js/locations/old/$DateStr" -ItemType Directory
}

Copy-Item "$diretorio_trabalho/js/locations/locations-erroapi.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-erroapi.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-gpon.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-gpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-hfc.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-hfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-nada.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-nada.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-neutrogpon.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-neutrogpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-neutrohfc.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-neutrohfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-sobrepo.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-sobrepo.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-data-lista.txt" -Destination "$diretorio_trabalho/bk/$DateStr/locations-data-lista.txt" -Recurse -force

Copy-Item "$diretorio_trabalho/js/locations/locations-erroapi.js" -Destination "$diretorio_site/js/locations/locations-erroapi.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-gpon.js" -Destination "$diretorio_site/js/locations/locations-gpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-hfc.js" -Destination "$diretorio_site/js/locations/locations-hfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-nada.js" -Destination "$diretorio_site/js/locations/locations-nada.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-neutrogpon.js" -Destination "$diretorio_site/js/locations/locations-neutrogpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-neutrohfc.js" -Destination "$diretorio_site/js/locations/locations-neutrohfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-sobrepo.js" -Destination "$diretorio_site/js/locations/locations-sobrepo.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-data-lista.txt" -Destination "$diretorio_site/js/locations/locations-data-lista.txt" -Recurse -force

Copy-Item "$diretorio_trabalho/js/locations/locations-erroapi.js" -Destination "$diretorio_site/js/locations/old/$DateStr/locations-erroapi.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-gpon.js" -Destination "$diretorio_site/js/locations/old/$DateStr/locations-gpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-hfc.js" -Destination "$diretorio_site/js/locations/old/$DateStr/locations-hfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-nada.js" -Destination "$diretorio_site/js/locations/old/$DateStr/locations-nada.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-neutrogpon.js" -Destination "$diretorio_site/js/locations/old/$DateStr/locations-neutrogpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-neutrohfc.js" -Destination "$diretorio_site/js/locations/old/$DateStr/locations-neutrohfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations/locations-sobrepo.js" -Destination "$diretorio_site/js/locations/old/$DateStr/locations-sobrepo.js" -Recurse -force