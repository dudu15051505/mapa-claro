$diretorio_raiz = "/home/runner/work/mapa-claro-beta/mapa-claro-beta"
$diretorio_trabalho = "$diretorio_raiz/scripts"
$diretorio_site = "$diretorio_raiz/docs"

$DateStr = Get-Date -Format "yyyy-MM-dd"

if (!(Test-Path "$diretorio_trabalho/bk/$DateStr")) {
    New-Item "$diretorio_trabalho/bk/$DateStr" -ItemType Directory
}

if (!(Test-Path "$diretorio_site/js/old/$DateStr")) {
    New-Item "$diretorio_site/js/old/$DateStr" -ItemType Directory
}

Copy-Item "$diretorio_trabalho/js/data-update.js" -Destination "$diretorio_trabalho/bk/$DateStr/data-update.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-erroapi.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-erroapi.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-gpon.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-gpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-hfc.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-hfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-nada.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-nada.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-neutrogpon.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-neutrogpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-neutrohfc.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-neutrohfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-sobrepo.js" -Destination "$diretorio_trabalho/bk/$DateStr/locations-sobrepo.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/data-lista.txt" -Destination "$diretorio_trabalho/bk/$DateStr/data-lista.txt" -Recurse -force

Copy-Item "$diretorio_trabalho/js/data-update.js" -Destination "$diretorio_site/js/data-update.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-erroapi.js" -Destination "$diretorio_site/js/locations-erroapi.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-gpon.js" -Destination "$diretorio_site/js/locations-gpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-hfc.js" -Destination "$diretorio_site/js/locations-hfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-nada.js" -Destination "$diretorio_site/js/locations-nada.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-neutrogpon.js" -Destination "$diretorio_site/js/locations-neutrogpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-neutrohfc.js" -Destination "$diretorio_site/js/locations-neutrohfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-sobrepo.js" -Destination "$diretorio_site/js/locations-sobrepo.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/data-lista.txt" -Destination "$diretorio_site/js/data-lista.txt" -Recurse -force

Copy-Item "$diretorio_trabalho/js/data-update.js" -Destination "$diretorio_site/js/old/$DateStr/data-update.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-erroapi.js" -Destination "$diretorio_site/js/old/$DateStr/locations-erroapi.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-gpon.js" -Destination "$diretorio_site/js/old/$DateStr/locations-gpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-hfc.js" -Destination "$diretorio_site/js/old/$DateStr/locations-hfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-nada.js" -Destination "$diretorio_site/js/old/$DateStr/locations-nada.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-neutrogpon.js" -Destination "$diretorio_site/js/old/$DateStr/locations-neutrogpon.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-neutrohfc.js" -Destination "$diretorio_site/js/old/$DateStr/locations-neutrohfc.js" -Recurse -force
Copy-Item "$diretorio_trabalho/js/locations-sobrepo.js" -Destination "$diretorio_site/js/old/$DateStr/locations-sobrepo.js" -Recurse -force