json.extract! beer, :id, :brand, :tagline, :first_brewed, :abv, :description, :yeast, :image_url, :created_at, :updated_at
json.url beer_url(beer, format: :json)
