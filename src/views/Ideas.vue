 <template>
  <h1>Ideas</h1>
    <v-card id="idea-card" v-for="(item, i) in items" :key="i">
      <div id="idea-head">
        <div id="idea-head-left">
          <v-avatar>
            <v-img size="100" src="https://pbs.twimg.com/profile_images/1257083037537501185/HCcZl8Os_400x400.jpg"></v-img>
          </v-avatar>
        </div>
        <div id="idea-head-right">
          <v-card-title>{{item.title}}</v-card-title>
          <v-card-subtitle><strong>Por: </strong>Renan Soriano em {{item.data}}</v-card-subtitle>
        </div>
      </div>
      <v-card-text>{{item.text}}</v-card-text>
      <v-chip id="idea-ticker">{{item.ticker}}</v-chip>
      <v-card-actions id="idea-comentario">
        <v-btn id="idea-btn-comentario">{{item.comment}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn id="idea-bt-new"
      fab
      large
      color="#F0F4C3"
    >
      <v-icon dark> mdi-pencil</v-icon>
    </v-btn>
</template>

<script>
export default {

  name: 'Ideas',

  data: () => ({ 

    items: [
      { title: 'Hora da verdade para conguinha?', data: '3 de agosto de 2021 às 8:14 PM', text: 'Vamos comprar Conga', ticker: '#COGN3', comment: 'Comentários 150' },
      { title: 'Só batem na VARA!', data: '4 de agosto de 2021 às 8:14 PM', text: 'Vamos comprar Vara ai galera', ticker: '#VVAR3', comment: 'Comentários 15' },
      { title: 'Só batem na VARA!', data: '4 de agosto de 2021 às 8:14 PM', text: 'Vamos comprar Vara ai galera', ticker: '#VVAR3', comment: 'Comentários 15' },
      { title: 'Só batem na VARA!', data: '4 de agosto de 2021 às 8:14 PM', text: 'Vamos comprar Vara ai galera', ticker: '#VVAR3', comment: 'Comentários 15' },
      { title: 'Só batem na VARA!', data: '4 de agosto de 2021 às 8:14 PM', text: 'Vamos comprar Vara ai galera', ticker: '#VVAR3', comment: 'Comentários 15' }
    ]

  }),

};
</script>


<style>

h1 {
  color: #000;
  margin-top: 10px;
  margin-left: 10px;
}

#idea-card{
  padding: 4px;
  max-width: 85%;
  margin: 0 auto; 
  float: none; 
  margin-bottom: 15px;
  margin-top: 15px;
}

#idea-head-left{
  float: left;
}

#idea-ticker{
  margin: 8px;
}

#idea-comentario{
  float: right;
}

#idea-btn-comentario{
  color:#fff;
  background-color: #000;
}

#idea-btn-new{
  float: right;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
}

</style>