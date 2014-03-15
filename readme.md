# CoinTipper server

CoinTipper server api based on [jQuery.CoinTipper](https://github.com/jeremymouton/cointipper), written with Sinatra. 

This version supports ANY coin.

## Setup

1. Clone the repo
2. <code>~ cd</code> into the repo.
3. <code>~ ruby app.rb</code>.

You can then access the button using the folling URL scheme:

<code>/currency/ISO/name/address</code>

Example:

<code>/bitcoin/BTC/CoinTipper/1G967MwCf6XsMufpot3wHzbYnU3d2RevD5</code>

<small>No trailing '/', and all params are required (in that order).</small>