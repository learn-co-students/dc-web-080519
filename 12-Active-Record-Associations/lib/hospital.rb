class Hospital < ActiveRecord::Base
    has_many :doctors 

    #creating an instance method called doctors
end 