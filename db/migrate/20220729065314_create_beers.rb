class CreateBeers < ActiveRecord::Migration[7.0]
  def change
    create_table :beers do |t|
      t.string :brand
      t.string :tagline
      t.string :first_brewed
      t.string :abv
      t.string :description
      t.string :yeast
      t.string :image_url

      t.timestamps
    end
  end
end
