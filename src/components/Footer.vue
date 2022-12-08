<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <ul class="footer__list">
        <li v-for="item in menu" :key="item.name" class="footer__list-item">
          <router-link :to="item.url" class="font-size-16-light">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div class="icons">
        <ul class="footer__list icons__list">
          <li class="icons__list-item pr-3">
            <a
              href="https://t.me/DeStore_Network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b-icon
                pack="fab"
                icon="telegram"
                size="is-medium"
                type="is-white"
              >
              </b-icon>
            </a>
          </li>
          <li class="icons__list-item">
            <a
              href="https://twitter.com/DeStore_Network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b-icon
                pack="fab"
                icon="twitter"
                size="is-medium"
                type="is-white"
              >
              </b-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface Menu {
  name: string;
  url: string;
}
@Component({
  components: {},
})
export default class Footer extends Vue {
  public menu: Menu[] = [
    {
      name: "© 2022 DeStore Network ",
      url: "/",
    },
    {
      name: " Privacy Policy ",
      url: "/",
    },
    {
      name: " Terms and Conditions ",
      url: "/",
    },
  ];
}
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all";

.footer {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    height: 85px;

    @include desktop {
      flex-direction: row;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__list-item {
    position: relative;
    padding: 0 8px;

    &:not(:last-child) {
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 1px;
        height: 12px;
        background: #fff;
      }
    }

    a {
      color: #fff;
    }
  }
}

.icons {
  &__list-item {
    padding: 0 2px;
  }
}
</style>
