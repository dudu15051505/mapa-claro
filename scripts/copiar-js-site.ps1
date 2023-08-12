$githubWorkspace = $env:GITHUB_WORKSPACE
$caminhoRelativo = "scripts/"
$diretorio_trabalho = Join-Path $githubWorkspace $caminhoRelativo
$diretorio_site = "$githubWorkspace/docs"
$diretorio_arquivos_processados = "$diretorio_trabalho/processados"

$DateStr = Get-Date -Format "yyyy-MM-dd"

if (!(Test-Path "$diretorio_trabalho/bk/$DateStr")) {
    New-Item "$diretorio_trabalho/bk/$DateStr" -ItemType Directory
}

if (!(Test-Path "$diretorio_site/js/locations/old/$DateStr")) {
    New-Item "$diretorio_site/js/locations/old/$DateStr" -ItemType Directory
}

Copy-Item -Path "$diretorio_arquivos_processados/*" -Destination "$diretorio_trabalho/bk/$DateStr/" -Recurse -force

Copy-Item -Path "$diretorio_arquivos_processados/*" -Destination "$diretorio_site/js/locations/" -Recurse -force

Copy-Item -Path "$diretorio_arquivos_processados/*" -Destination "$diretorio_site/js/locations/old/$DateStr/" -Recurse -force