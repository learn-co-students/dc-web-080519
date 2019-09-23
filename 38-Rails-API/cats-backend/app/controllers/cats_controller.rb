class CatsController < ApplicationController
    def index 
        #but I want to have hobies data embedded in 
        cats = Cat.all
        render json: cats.to_json(cat_serializer) 
    end 

    def show
        render json: Cat.find(params["id"]).to_json(cat_serializer)
    end 

    def egg 
        render json: {message: "You found me!!"}
    end

    def create 
        new_cat = Cat.create(cat_params)
        render json: new_cat
    end

    def update 
        Cat.find(params["id"]).update(cat_params)
        render json: Cat.find(params["id"])
    end 

    def destroy
        render json: Cat.find(params["id"]).destroy
    end 

    private
    def cat_params
        params.require(:cat).permit(:name, :image, :age, :available)
    end 

    def cat_serializer
        {
            :only => [:id, :name, :age, :image, :available], 
            :include => {:hobbies => {
                :except => [:created_at, :updated_at]
                }
            }
        }
    end 
end
