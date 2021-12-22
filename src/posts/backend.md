---
layout: post.njk
title: Dentro del Repositorio de Back-End
---

# Modelo de Datos

|  **CLIENT**  | **PRODUCTS**  | **ORDERS**  | **RESERVATIONS**  |
| ------------ | ------------- | ----------- | ----------------- |
| **idClient** | **idProduct** | **idOrder** | **idReservation** |
| Name         | Name          | idProduct   | idClient          |
| Role         | Description   | idClient    | Table             |
| Email        | *Img*         | Status      | People            |
| Password     | Price         | Detail      | Phone             |
| **Address**  | **Type**      | Date        | Description       |

<br/>

| **ADDRESS**  |
| -------- |
| idClient |
| Name     |
| Surname  |
| Country  |
| State    |
| City     |
| ZipCode  |
| Phone    |

<br/>

## Type

| **Coffee**  | **Tea**  |
| ------------  | ---------- |
|   Expresso    | Matcha Tea |
| Blue Mountain | Green Tea  |
|     Mocha     |  Blue Tea  |
|     Blend     |  Red Tea   |
|  Kilimanjaro  | Black Tea  |
| Decaffeinated | White Tea  |

<br/>

# Endpoints

Work in progress...

<br/><br/>

---

[← Volver](https://paolaski.github.io/the-roost-wiki.github.io/){.link--green .link--bold}
