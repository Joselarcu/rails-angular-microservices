  # t.string "title"
  #   t.string "description"
  #   t.text "file_url"
  #   t.text "image_url"
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false

  # 
  10.times do |d|  
  FreelanceDocument.create!(title: "Document #{d}", 
  	description: "Lorem fistrum te voy a borrar el cerito amatomaa me cago en tus muelas. Al ataquerl me cago en tus muelas torpedo de la pradera. Papaar papaar diodeno apetecan quietooor está la cosa muy malar al ataquerl torpedo te va a hasé pupitaa pupita diodenoo benemeritaar. Pecador ahorarr amatomaa apetecan de la pradera jarl la caidita. Hasta luego Lucas qué dise usteer no puedor amatomaa va usté muy cargadoo llevame al sircoo caballo blanco caballo negroorl no puedor pupita. A peich torpedo apetecan tiene musho peligro por la gloria de mi madre ese que llega benemeritaar jarl a wan te va a hasé pupitaa ese que llega. Mamaar ese hombree fistro jarl torpedo. Fistro amatomaa apetecan por la gloria de mi madre quietooor ese pedazo de de la pradera. Te va a hasé pupitaa benemeritaar qué dise usteer te va a hasé pupitaa jarl fistro ese que llega jarl benemeritaar.",
  	file_url: "https://docs.google.com/document/d/1HruYB_kZh1UaYLZRb8pvKf9Yx-IGs91z16jB1E4kJHc/edit?usp=sharing", 
  	image_url: "https://cms-assets.tutsplus.com/uploads/users/23/posts/27382/image/freelance-resume-work.jpg")
end