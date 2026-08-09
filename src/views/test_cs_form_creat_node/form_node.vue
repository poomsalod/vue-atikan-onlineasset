<script setup>
    const body = {
  "workflow": {
    "workflow_name": "UAT Costsheet/QT/Invoice Flow",
    "workflow_descript": "Payload สร้างจากเอกสารจริง (มีเงื่อนไขต่อเส้น)",
    "workflow_version": "v1",
    "permission": [
      { "permission_type": "role", "permission_value": ["admin"] }
    ],
    "business_id": "66b2f9fa3e13c600019b0001"
  },
  "node": [
    {
      "node_name": "formCostSheet",
      "node_type": "string",
      "detail": [{ "type": "form", "form_name": "Costsheet" }],
      "next_edges": [
        { "to_name": "nodeDecision_1" }
      ]
    },

    {
      "node_name": "nodeDecision_1",
      "node_type": "string",
      "detail": [{ "type": "decision" }],
      "next_edges": [
        { "to_name": "nodeDecision_2", "condition": "Standard" },
        { "to_name": "nodeSignPreSaleCS", "condition": "Solution" }
      ]
    },

    {
      "node_name": "nodeSignPreSaleCS",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignCostCS" }
      ]
    },

    {
      "node_name": "nodeSignCostCS",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [
          { "email": "thanakorn.pum@one.th" },
          { "email": "natchanon.won@one.th" },
          { "email": "witsuda.ch@one.th" },
          { "email": "suvanee.pr@one.th" },
          { "email": "jittrin.hu@one.th" },
          { "email": "onjira.ne@one.th" },
          { "email": "jutaporn.ka@one.th" },
          { "email": "pornwadee.ph@one.th" },
          { "email": "pattanapong.pr@one.th" },
          { "email": "naranya.ja@one.th" },
          { "email": "montri.lam@one.th" },
          { "email": "dolrit.so@one.th" },
          { "email": "Napawan.pra@one.th" },
          { "email": "natthawut.wa@one.th" },
          { "email": "kwanchai.ko@one.th" }
        ],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignSaleCS" }
      ]
    },

    {
      "node_name": "nodeSignSaleCS",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "sender",
        "permission_email": [],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeDecision_2" }
      ]
    },

    {
      "node_name": "nodeDecision_2",
      "node_type": "string",
      "detail": [{ "type": "decision" }],
      "next_edges": [
        { "to_name": "nodeSignSBMGreen_A", "condition": "sf more than 1.00" },
        { "to_name": "nodeSignSBMYellow_A", "condition": "sf more than 0.9 less than 1" },
        { "to_name": "nodeSignSBMRed_A", "condition": "sf less than 0.9" }
      ]
    },

    {
      "node_name": "nodeSignSBMGreen_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "kamonchanok.thep@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "formQT" }
      ]
    },

    {
      "node_name": "nodeSignSBMYellow_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "kamonchanok.thep@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignAVPSaleYellow_A" }
      ]
    },
    {
      "node_name": "nodeSignAVPSaleYellow_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "sumeth.na@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignAVPCostYellow_A" }
      ]
    },
    {
      "node_name": "nodeSignAVPCostYellow_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "jiraporn.kat@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "formQT" }
      ]
    },

    {
      "node_name": "nodeSignSBMRed_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "kamonchanok.thep@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignAVPSaleRed_A" }
      ]
    },
    {
      "node_name": "nodeSignAVPSaleRed_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "sumeth.na@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignAVPCostRed_A" }
      ]
    },
    {
      "node_name": "nodeSignAVPCostRed_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "jiraporn.kat@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignDMD_A" }
      ]
    },
    {
      "node_name": "nodeSignDMD_A",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "wanchai.vach@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "formQT" }
      ]
    },

    {
      "node_name": "formQT",
      "node_type": "string",
      "detail": [{ "type": "form", "form_name": "QT" }],
      "next_edges": [
        { "to_name": "nodeSignSaleQT" }
      ]
    },
    {
      "node_name": "nodeSignSaleQT",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "sender",
        "permission_email": []
      },
      "next_edges": [
        { "to_name": "nodeSignSBMQT" }
      ]
    },
    {
      "node_name": "nodeSignSBMQT",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "kamonchanok.thep@one.th" }],
        "is_approve": true
      },
      "next_edges": [
        { "to_name": "nodeSignSaleAfterQT" }
      ]
    },

    {
      "node_name": "nodeSignSaleAfterQT",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "sender",
        "permission_email": []
      },
      "next_edges": [
        { "to_name": "nodeInvoice" }
      ]
    },
    {
      "node_name": "nodeInvoice",
      "node_type": "string",
      "detail": [{ "type": "form", "form_name": "Invoice" }],
      "next_edges": [
        { "to_name": "nodeSignSaleInvoice" }
      ]
    },
    {
      "node_name": "nodeSignSaleInvoice",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "sender",
        "permission_email": []
      },
      "next_edges": [
        { "to_name": "nodeSummary" }
      ]
    },
    {
      "node_name": "nodeSummary",
      "node_type": "string",
      "detail": [{ "type": "form", "form_name": "Summary" }],
      "next_edges": [
        { "to_name": "nodeSignBlockSummary" }
      ]
    },
    {
      "node_name": "nodeSignBlockSummary",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [{ "email": "sumeth.na@one.th" }]
      },
      "next_edges": [
        { "to_name": "nodeSignCostSOSummary" }
      ]
    },
    {
      "node_name": "nodeSignCostSOSummary",
      "node_type": "string",
      "detail": [{ "type": "sign" }],
      "condition": {
        "sign_type": "sign",
        "approve_type": "personal",
        "permission_email": [
          { "email": "angkana.sa@one.th" },
          { "email": "witsuda.ch@one.th" },
          { "email": "narisa.ar@one.th" },
          { "email": "onjira.ne@one.th" },
          { "email": "wanthana.th@one.th" },
          { "email": "doungsom.pa@one.th" },
          { "email": "montri.lam@one.th" },
          { "email": "supanat.ya@one.th" }
        ],
        "is_approve": true
      },
      "next_edges": []
    }
  ]
    }
    let isSf = false
</script>

<template>
    <div class="grid grid-flow-row auto-rows-max">
        <div class="flex flex-row">
            <legend class="fieldset-legend">Work flow name:</legend>
            <input type="text" class="input" placeholder="enter name" v-model="body.workflow.workflow_name" />
        </div>
        <div class="flex flex-row">
            <label class="label">
                <input type="checkbox" checked="checked" class="checkbox" v-model="isSf" />
                Sf
            </label>
        </div>
        <div class="grid grid-flow-row auto-rows-max">
            <div class="grid grid-flow-row auto-rows-max">
                <legend class="fieldset-legend">CS</legend>
                <input type="text" class="input" placeholder="node 1" />
                <input type="text" class="input" placeholder="node 2" />
                <input type="text" class="input" placeholder="node 3" />
            </div>
            <div class="grid grid-flow-row auto-rows-max">
                <legend class="fieldset-legend">QT</legend>
                <input type="text" class="input" placeholder="node 1" />
                <input type="text" class="input" placeholder="node 2" />
                <input type="text" class="input" placeholder="node 3" />
            </div>
            <div class="grid grid-flow-row auto-rows-max">
                <legend class="fieldset-legend">IV</legend>
                <input type="text" class="input" placeholder="node 1" />
                <input type="text" class="input" placeholder="node 2" />
                <input type="text" class="input" placeholder="node 3" />
            </div>
            <div class="grid grid-flow-row auto-rows-max">
                <legend class="fieldset-legend">SO</legend>
                <input type="text" class="input" placeholder="node 1" />
                <input type="text" class="input" placeholder="node 2" />
                <input type="text" class="input" placeholder="node 3" />
            </div>
        </div>
        <!-- <div class="flex flex-row">
            <label class="label">
                <input type="checkbox" checked="checked" class="checkbox" />
                Standart
            </label>
        </div>
        <div class="flex flex-row">
            <label class="label">
                <input type="checkbox" checked="checked" class="checkbox" />
                green
            </label>
            <label class="label">
                <input type="checkbox" checked="checked" class="checkbox" />
                yellow
            </label>
            <label class="label">
                <input type="checkbox" checked="checked" class="checkbox" />
                red
            </label>
        </div>
        <div class="flex flex-row">
            <label class="label">
                <input type="checkbox" checked="checked" class="checkbox" />
                Solution
            </label>
        </div> -->
    </div>
</template>