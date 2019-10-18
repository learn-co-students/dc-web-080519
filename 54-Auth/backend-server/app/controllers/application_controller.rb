require_relative '../../config/key.rb'

class ApplicationController < ActionController::API

  def secret_key
    'h3llo'
  end

  def encode(payload)
    #return a token given a payload
    JWT.encode(payload, secret_key, 'HS256')
  end

  def decode(token)
    #return the OG payload
    JWT.decode(token, secret_key, true, {algorithm: 'HS256'})[0]
  end
end
