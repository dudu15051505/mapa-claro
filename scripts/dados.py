import csv
import os
import requests
import random
import time
import shutil
from unidecode import unidecode
from datetime import date

def remover_acentos(texto):
    return unidecode(texto)

diretorio_trabalho = "/home/runner/work/mapa-claro/mapa-claro/scripts/"

csv_path = diretorio_trabalho + "arquivo.csv"

# Criar a pasta "dados" se ela não existir
folder_path = diretorio_trabalho + "dados"
folder_path_erro = diretorio_trabalho + "erro consulta"
shutil.rmtree(folder_path, ignore_errors=True)
shutil.rmtree(folder_path_erro, ignore_errors=True)
os.makedirs(folder_path, exist_ok=True)
os.makedirs(folder_path_erro, exist_ok=True)

# Ler o arquivo CSV e armazenar as siglas do estado e cidades em listas separadas
states = []
cities = []

with open(csv_path, "r") as csvfile:
    reader = csv.reader(csvfile)
    header = next(reader)
    for row in reader:
        states.append(row[0])
        cities.append(row[1])

# Definir o número de consultas após o qual será definido um tempo de espera aleatório
consultas_por_intervalo = 20

# Loop pelas cidades e fazer a solicitação GET para cada uma delas
for i in range(len(cities)):
    city = cities[i]
    state = states[i]
    
    # Montar a URL com a cidade e o estado atual
    # A partir da semana 17/07/2023 api da claro, o nome das cidades foram retirados todas os caracteres de acentuação
    url = f"https://planos.claro.com.br/cobertura/api/promotions?city={remover_acentos(city)}&state={state}"
    #url = f"https://planos.claro.com.br/cobertura/api/promotions?city={city}&state={state}"

    # Realizar a solicitação GET
    response = requests.get(url)

    # Obter os valores da tag "tecnologia" para cada promoção
    json_data = response.json()
    values = [promo["tecnologia"] for promo in json_data["promo"]]
    
    # Obter os valores da tag "tecnologia" para cada promoção
    estado = [promo["estado"] for promo in json_data["promo"]]
    
    if estado:
        if estado[0] == state:
            # Salvar os valores em um arquivo de texto dentro da pasta "dados"
            file_name = f"{state}-{city}.txt"
            file_path = os.path.join(folder_path, file_name)
            with open(file_path, "w") as file:
                file.write("\n".join(values))

            print(f"Arquivo salvo para {city}, {state}: {file_path}")
        else:
            file_name = f"ERRO CADASTRO API {state}-{city}.txt"
            file_path = os.path.join(folder_path_erro, file_name)
            with open(file_path, "w") as file:
                file.write("\n".join(values))
            print(f"A tag 'estado' não é igual a {state} em uma das promoções.")
    else:
        file_name = f"{state}-{city}.txt"
        file_path = os.path.join(folder_path, file_name)
        with open(file_path, "w") as file:
            file.write("\n".join(values))
        print(f"Arquivo salvo para {city}, {state}: {file_path}")

    # Verificar se é hora de definir um tempo de espera aleatório
    if (i + 1) % consultas_por_intervalo == 0:
        # Definir um tempo de espera aleatório entre 5 e 10 segundos
        delay = random.uniform(5, 10)
        print(f"Aguardando por {delay} segundos...")
        time.sleep(delay)

    else:
        # Aguardar 3 segundos antes da próxima solicitação
        time.sleep(3)

f = open(diretorio_trabalho + "js/data-update.js", "w")

today = date.today()
# dd/mm/YYYY
d1 = today.strftime("%d/%m/%Y")
data_atual = 'var data_update = "{}"'.format(d1)
f.write(data_atual)
f.close()

# YYYY-mm-dd
today = date.today()
d2 = today.strftime("%Y-%m-%d")
with open(diretorio_trabalho + 'js/data-lista.txt', 'a') as my_file:
    my_file.write('\n"' + d2 + '","' + d2 + '","","#","Consulta automática"')
    
    