 <template>
 <h1>Ideas</h1>
  <v-row justify="center">
    <v-card id="idea-card" shaped v-for="(item, i) in items" :key="i">
      <v-card-title>{{item.title}}</v-card-title>
      <v-card-subtitle>
        <strong>Por: </strong>Renan Soriano em {{item.data}}
          </v-card-subtitle>
        <v-card-text>
          <v-icon class="mr-1"> mdi-heart </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1"> mdi-share-variant </v-icon>
          <span class="subheading">45</span>
        </v-card-text>
      <v-card-text>{{item.text}}</v-card-text>
      <v-chip id="idea-ticker">{{item.ticker}}</v-chip>
      <v-card-actions>
        <v-btn id="idea-btn-comentario" text @click="reserve">{{item.comment}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
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
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 4px;
  min-width: 95%;
}

#idea-ticker{
  margin: 8px;
}

#idea-btn-comentario{
  color:#fff;
  background-color: #000;
}

</style>