require 'sinatra'

class CoinTipper < Sinatra::Base
  set :protection, :except => :frame_options

  get '/' do
  	"Pass in options in the url: type/currency/ISO/address/label"
  end
  
  get '/:type/:currency/:iso/:address/:label' do
    @type     = params[:type]
    @currency = params[:currency]
    @iso      = params[:iso]
    @address  = params[:address]
    @label    = params[:label]
  
    erb :index
  end
end