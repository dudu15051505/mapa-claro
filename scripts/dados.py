import csv
import os
import requests
import random
import time

# Definir o caminho para o arquivo CSV
csv_path = "saida_powershell.csv"

# Criar a pasta "dados" se ela não existir
folder_path = "dados"
os.makedirs(folder_path, exist_ok=True)

# Ler o arquivo CSV e armazenar as siglas do estado e cidades em listas separadas
states = []
cities = []

with open(csv_path, "r") as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        states.append(row[0])
        cities.append(row[1])

# Definir o número de consultas após o qual será definido um tempo de espera aleatório
consultas_por_intervalo = 20

# Loop pelas cidades e fazer a solicitação GET para cada uma delas
for i in range(len(cities)):
    city = cities[i]
    state = states[i]
    estado = [0]
    
    # Montar a URL com a cidade e o estado atual
    url = f"https://planos.claro.com.br/cobertura/api/promotions?city={city}&state={state}"

    # Realizar a solicitação GET
    response = requests.get(url)

    # Obter os valores da tag "tecnologia" para cada promoção
    json_data = response.json()
    values = [promo["tecnologia"] for promo in json_data["promo"]]
    
    # Obter os valores da tag "tecnologia" para cada promoção
    estado = [promo["estado"] for promo in json_data["promo"]]
    
    if estado[0] == state:
        # Salvar os valores em um arquivo de texto dentro da pasta "dados"
        file_name = f"{state}-{city}.txt"
        file_path = os.path.join(folder_path, file_name)
        with open(file_path, "w") as file:
            file.write("\n".join(values))

        print(f"Arquivo salvo para {city}, {state}: {file_path}")
    else:
            print(f"A tag 'estado' não é igual a {state} em uma das promoções. O arquivo não será salvo.")

    # Verificar se é hora de definir um tempo de espera aleatório
    if (i + 1) % consultas_por_intervalo == 0:
        # Definir um tempo de espera aleatório entre 5 e 10 segundos
        delay = random.uniform(5, 15)
        print(f"Aguardando por {delay} segundos...")
        time.sleep(delay)

    else:
        # Aguardar 3 segundos antes da próxima solicitação
        time.sleep(3)
