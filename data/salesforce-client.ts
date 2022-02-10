import fetch from "node-fetch"


const grant_type = "password"
const client_id = "3MVG9Kip4IKAZQEXhXDTe.GzOaUg5pcWw9cb.u0_l0ToZ7W8K61MXtjHKlSR1RFSGG4SLfSZ5H.r9a3DJHVa4"
const client_secret = "A6D72DD2AE0A33001B5C710BD28F3CD91D28184403D6D40C4645FD8E28D8D1A5"
const username = "sf-parent360@elemy.com.uat"
const password = "M$vT9Dz<cz4#4Xj0YYneX8TumSKUsYU2FZjjSpH"
let token = ""


export const SalesForceClient = {
  initSalesforceToken: async () => {
    const url = 'https://sprouttherapyllc--uat.my.salesforce.com/services/oauth2/token'
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",

      },
      body: new URLSearchParams({
        grant_type: grant_type,
        client_id: client_id,
        client_secret: client_secret,
        username: username,
        password: password

      })
    })
    const text = await response.json()
    token = text.access_token
    console.log(token)

  },

  getOppById: async (id) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/sobjects/Opportunity/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getOppByEmail: async (email) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/query/?q=SELECT Id,Company,CloseDate, Name, CreatedDate FROM Opportunity WHERE Parent_s_Email__c = '${email}'`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },
  
  getLeadFieldsByEmail: async (email) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/query?q=SELECT 
    Id, 
    Status, 
    Company, 
    Email, 
    SproutUserId__c, 
    Lead_Type_4_0__c, 
    Address, 
    Out_of_Service_Area__c, 
    Diagnosis_Documents_collected__c, 
    Client_Code__c,
    CreatedById,
    Appointment_No_Show__c,
    Booked_Calendly_Slot__c,
    Cash_Pay__c,
    Contacted__c

    FROM Lead WHERE Email='${encodeURIComponent(email)}'`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getVobById: async (id) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/sobjects/Verification_of_Benefits__c/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getLeadById: async (id) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/sobjects/Lead/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getVobByEmail: async (email) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/query/', '${email}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  createLead: async (data) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/sobjects/Lead`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();

  },
  convertLead: async (data) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v53.0/actions/custom/flow/Lead_Convert_Autolaunched`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  createOpp: async (data) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/sobjects/Opportunity`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  createVob: async (data) => {
    const url = `https://sprouttherapyllc--uat.my.salesforce.com/services/data/v49.0/sobjects/Verification_of_Benefits__c`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

};