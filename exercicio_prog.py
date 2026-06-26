print()

nome = input("Digite o seu nome: ")

print()
print(f"Olá, {nome}... tudo bem? Se alguem te falar que para aprender programação não é necessário saber matemática, não acredite. Estão te enganando.")
print()
print("Vamos lá!")


# TABUADA
print()
print("=" * 50)
print("PRIMEIRO PROGRAMA - TABUADA")
print()

num = int(input("Digite um número: "))

for i in range(1,11):
    print(f"{i} X {num} = {i * num}")

# EXIBIR NÚMEROS PARES
print()
print("=" * 50)
print("SEGUNDO PROGRAMA - EXIBIR NÚMEROS PARES")
print()

pri = int(input("Digite o primeiro número: "))
seg = int(input("Digite o segundo número: "))
ter = int(input("Digite o terceiro número: "))
qua = int(input("Digite o quarto número: "))
qui = int(input("Digite o quinto número: "))

lista = [pri, seg, ter, qua, qui]

pares = []

for i in lista:
    if i % 2 == 0:
        pares.append(i)

print()
print(f"Da lista {lista} apenas os números pares são: {pares}")

# SOMA DE NUMEROS INTEIROS
print()
print("=" * 50)
print("TERCEIRO PROGRAMA - SOMA DE NUMEROS INTEIROS")
print()

numero = int(input("Digite um número maior que 10: "))

num_str = str(numero)
total = 0

for i in num_str:
    total += int(i)

print() 
print(f"A soma dos números inteiros de {numero} é = {total}")

# CALCULO FATORIAL
print()
print("=" * 50)
print("QUARTO PROGRAMA - CALCULO FATORIAL")
print()

fat = int(input("Digite um número: "))

fatorial = 1

for i in range(1, fat + 1):
    fatorial *= i
print()
print(f"O fatorial de {fat} é: {fatorial}.")

# NÚMEROS PRIMOS
print()
print("=" * 50)
print("DESAFIO EXTRA - NÚMEROS PRIMOS")
print()

primo = int(input("Digite um número: "))

print()
while primo <= 1:
    print("O Número precisa ser maior que 1! Tente novamente.")
    print()
    primo = int(input("Digite um número: "))
    print()

if primo > 1:
    for i in range(2, primo):
         if primo % i == 0:
            print(f"O {primo} não é um número primo! Ele é divisivel por {i}")
            break
    
    else:
        print(f"O {primo} é um número primo!")

# AGRADECIMENTO
print()
print("Muito obrigado!!! Até a proxima.")
print()
print("=" * 50)