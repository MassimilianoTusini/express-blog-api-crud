const menu = require('../data/menu');


function index(req, res) {
  let filteredMenu = menu;

  if (req.query.tag) {
    const tag = req.query.tag.toLowerCase();

    filteredMenu = menu.filter(post =>
      post.tags.some(t => t.toLowerCase().includes(tag))
    );
  }

  res.json(filteredMenu);
};


function show(req, res) {
  
    const id = parseInt(req.params.id)

    const post = menu.find(post => post.id === id);

    if (!post) {

        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }

    res.json(post);
}

function store(req, res) {
    const newId = post[post.length - 1].id + 1;

    const NewPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    post.push(NewPost);

    res.status(201).json(NewPost);
}

function update(req, res) {
    const post = post.find((i) => i.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }
    
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    res.json(post).sendStatus(200);
}

function modify(req, res) {
    const post = post.find((i) => i.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }

    req.body.title ? post.title = req.body.title : post.title = post.title;
    req.body.content ? post.content = req.body.content : post.content = post.content;
    req.body.image ? post.image = req.body.image : post.image = post.image;
    req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;

    res.json(post).sendStatus(200);
}

function destroy(req, res) {

    const id = parseInt(req.params.id)

    const post = menu.find(pizza => pizza.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }

    menu.splice(menu.indexOf(post), 1);
  
    console.log(menu);

    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }