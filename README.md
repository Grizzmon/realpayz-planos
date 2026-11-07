# RealPayZ — Planos 🇲🇿 🇦🇴

Projeto para a página de planos com versões por país.

## Preços

- Moçambique: GO 279 MT; Intermediário 529 MT; PRO 1.379 MT.
- Angola: Básico 4.000 Kz; Intermédio 8.000 Kz; Premium 20.000 Kz.

## Seleção de país

- `?pais=mz` força a versão de Moçambique.
- `?pais=ao` força a versão de Angola.
- Sem parâmetro, a aplicação escolherá por geolocalização aproximada do IP quando a implementação estiver publicada. Deve haver seleção manual para evitar erros de geolocalização.

## Promoção

A interface pode mostrar um contador promocional **demonstrativo** de quatro minutos e, ao terminar, a frase «Você ainda pode garantir sua oferta hoje». Não declarar que uma oferta real expira se não expira.

## Pagamentos

Os checkouts angolanos e moçambicanos precisam ser configurados e verificados separadamente antes da publicação de compra real; nunca encaminhar um comprador angolano inadvertidamente para checkout em MZN.

> Este repositório contém apenas a definição inicial. O site de produção existente ainda não foi alterado.
