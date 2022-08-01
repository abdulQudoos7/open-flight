json.array! @beers do |beer|
  json.id beer[:id]
  json.name beer[:name]
  json.tagline beer[:tagline]
  json.first_brewed beer[:first_brewed]
  json.description beer[:description]
  json.image_url beer[:image_url]
  json.abv beer[:abv]
end