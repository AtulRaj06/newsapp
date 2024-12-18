"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const category = [
      {
        name: "Gida",
        category_code: "home",
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasar Hausa",
        category_code: "kasar_hausa",
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Afrika",
        category_code: "afrika",
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Duniya",
        category_code: "duniya",
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a Yau",
        category_code: "yanayi_a_yau",
        category_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Kano",
        category_code: "kano",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Zamfara",
        category_code: "zamfara",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kaduna",
        category_code: "kaduna",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jigawa",
        category_code: "jigawa",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Sokoto",
        category_code: "sokoto",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Katsina",
        category_code: "katsina",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bauchi",
        category_code: "bauchi",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Daura",
        category_code: "daura",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasar",
        category_code: "kasar",
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kudancin afirka",
        category_code: "kudancin_afirka",
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Arewacin afirka",
        category_code: "arewacin_afirka",
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Afirka ta yamma",
        category_code: "afirka_ta_yamma",
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gabashin afirka",
        category_code: "gabashin_afirka",
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Turai",
        category_code: "turai",
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Amurka",
        category_code: "amurka",
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Asiya",
        category_code: "asiya",
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gabas ta Tsakiya",
        category_code: "gabas_ta_tsakiya",
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Afirka",
        category_code: "afirka",
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci-Duniya",
        category_code: "kasuwanci_duniya",
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuawanci-Kasar Hausa",
        category_code: "kasuawanci_kasar_hausa",
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Kalon Kapa",
        category_code: "kalon_kapa",
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Dambe",
        category_code: "dambe",
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasa Kondo",
        category_code: "wasa_kondo",
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Siyassa",
        category_code: "siyassa",
        category_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Addini",
        category_code: "addini",
        category_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wasanni",
        category_code: "wasanni",
        category_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Silma/Kannywood",
        category_code: "silma_kannywood",
        category_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kasuwanci",
        category_code: "kasuwanci",
        category_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yanayi a yau",
        category_code: "yanayi_a_yau",
        category_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bidi'a",
        category_code: "bidi_a",
        category_id: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Turai",
        category_code: "turai",
        category_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Amurka",
        category_code: "amurka",
        category_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Asiya-Pacific",
        category_code: "asiya_pacific",
        category_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gabas ta Tsakiya",
        category_code: "gabas_ta_tsakiya",
        category_id: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Turai",
        category_code: "turai",
        category_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Amurka",
        category_code: "amurka",
        category_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Asiya-Pacific",
        category_code: "asiya_pacific",
        category_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gabas ta Tsakiya",
        category_code: "gabas_ta_tsakiya",
        category_id: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "Turai",
        category_code: "turai",
        category_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Amurka",
        category_code: "amurka",
        category_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Asiya-Pacific",
        category_code: "asiya_pacific",
        category_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gabas ta Tsakiya",
        category_code: "gabas_ta_tsakiya",
        category_id: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("categories", category, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
