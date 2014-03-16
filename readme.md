# CoinTipper server

CoinTipper server api based on [jQuery.CoinTipper](https://github.com/jeremymouton/cointipper), written with Sinatra. 

This version supports ANY coin.

<img src="https://dl.dropboxusercontent.com/u/2848831/Screen%20Shot%202014-03-15%20at%206.09.45%20PM.png" alt="">

## Setup

1. Clone the repo
2. <code>~ cd</code> into the repo.
3. <code>~ rackup -p 4567</code>.

You can then access the button using the folling URL scheme:

<code>/type/currency/iso/address/label</code>

Examples:

<code>/tip/bitcoin/BTC/1G967MwCf6XsMufpot3wHzbYnU3d2RevD5/CoinTipper</code>
<code>/donate/dogecoin/DOGE/DAxYkK3nGQPasscKYmbMswQJoV3h8y4aEW/CoinTipper</code>

*No trailing '/', and all params are required (in that order).*

For spaces in the "name" parameter, use a dash ("-"):

<code>/donate/dogecoin/DOGE/DAxYkK3nGQPasscKYmbMswQJoV3h8y4aEW/CoinTipper-Donation-Jar</code>