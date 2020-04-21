---
theme: nordish-beamer
paginate: true
header: 'Header space'
footer: 'Footer space'
title: 'marp-theme-nordish-beamer demo slide'
---

<!-- _class: title -->
# marp-theme-nordish-beamer

## Marp theme,
## with Beamer-like components,
## and Nord-like color scheme

created by @n-ari.

---

# marp-theme-nordish-beamer とは

marp-theme-nordish-beamer とは、Marp の default テーマをベースとし、Beamer で使われるブロック等を導入した、Nord ライクな配色のテーマ・エンジンです。
Marp を拡張し、ブロック等を導入することで、ゼミなどで使いやすくしています。

## 使い方

```sh
$ git clone https://github.com/n-ari/marp-theme-nordish-beamer
$ cd marp-theme-nordish-beamer
$ yarn
$ npx @marp-team/marp-cli --server ./slides
```

`marp.config.js` にて Marp を拡張しているため、`marp.config.js` の存在するディレクトリで marp-cli を実行する必要があります。
クローン時のディレクトリ名は好みに応じて変更してください。

---

# デモスライド

:::theorem:1(オイラーの定理)
$n$ を正の整数とする。$a$ を $n$ と互いに素な正の整数とする。このとき、
$$a^{\varphi(n)} \equiv 1 \pmod n$$
が成り立つ。ただしここで、$\varphi(n)$ はオイラーのトーシェント関数である。
:::

:::warn:注意
オイラーのトーシェント関数 $\varphi(n)$ は、$a^x\equiv 1\pmod n$ なる $x$ として最小のものを与えるわけではない。最小のものを与える関数としてカーマイケル関数 $\lambda(n)$ が存在し、これを **カーマイケルの定理** と呼ぶ。
:::

---

:::info
インフォブロック
Block for Information (info / blue)
:::
```md
:::info
インフォブロック
Block for Information (info / blue)
:::
```

:::warn:Warning
ワーニングブロック
Block for Warning (warn / red)
:::
```md
:::warn:Warning
ワーニングブロック
Block for Warning (warn / red)
:::
```

---

:::block:ブロック
タイトル付きブロック(黒)
Block with Title (block / black)
:::
```md
:::block:ブロック
タイトル付きブロック(黒)
Block with Title (block / black)
:::
```

:::block
ブロック
Block only (block / black)
:::
```md
:::block
ブロック
Block only (block / black)
:::
```

