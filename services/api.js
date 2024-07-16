import axios from "axios";


export const api  = axios.create({
    baseURL: 'https://mlorcycwdzosogsuzhmq.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sb3JjeWN3ZHpvc29nc3V6aG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNTA1ODksImV4cCI6MjAzNjcyNjU4OX0.xdMvTgMFrYkkVznR_Mvo0C50OCB17QGlshxfStHwfwI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sb3JjeWN3ZHpvc29nc3V6aG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNTA1ODksImV4cCI6MjAzNjcyNjU4OX0.xdMvTgMFrYkkVznR_Mvo0C50OCB17QGlshxfStHwfwI",
    }
})