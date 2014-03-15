require 'sinatra'

get '/' do
	"Pass in options in the url: /currency/ISO/name/address/"
end

get '/:currency/:iso/:name/:address' do
  # "#{params[:name]}/#{params[:currency]}/#{params[:address]}/#{params[:label]}"
  
  @currency = params[:currency]
  @iso      = params[:iso]
  @name     = params[:name]
  @address  = params[:address]

  erb :index

end