class User < ApplicationRecord
  has_secure_password

  def favorite_make
    "Honda"
  end
end
