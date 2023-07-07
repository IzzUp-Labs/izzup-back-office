<script lang="ts" setup>
import {userStore} from "../stores/user.store.ts";
import UserInfoModel from "../models/user-info.model.ts";

const store = userStore();
const user: UserInfoModel | null = store.user;
</script>

<template>
  <div class="navbar bg-base-200">
    <div class="flex-none">
      <label class="btn btn-square btn-ghost drawer-button" for="my-drawer">
        <svg class="inline-block w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        </svg>
      </label>
    </div>
    <div class="flex-1">
      <router-link to="/">
        <a class="btn btn-ghost normal-case text-xl">IzzUp</a>
      </router-link>
    </div>
    <div class="flex-none gap-2 z-10">
      <div class="dropdown dropdown-end">
        <label class="btn btn-ghost btn-circle avatar" tabindex="0">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
              <span>{{user?.last_name.charAt(0)+user?.first_name.charAt(0)}}</span>
            </div>
          </div>
        </label>
        <ul class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52" tabindex="0">
          <router-link to="/profile">
            <li>
              <a class="justify-between">
                Profile
              </a>
            </li>
          </router-link>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a v-on:click="store.logout()">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="drawer">
    <input id="my-drawer" class="drawer-toggle" type="checkbox"/>
    <div class="drawer-content">
      <div class="md:container md:mx-auto px-5 py-5">
        <router-view />
      </div>
    </div>
    <div class="drawer-side">
      <label class="drawer-overlay" for="my-drawer"></label>
      <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <div class="flex justify-center">
          <label class="btn btn-square btn-block btn-outline drawer-button" for="my-drawer">Close</label>
        </div>
        <li class="mt-5">
          <h2 class="menu-title">Basics</h2>
          <ul>
            <router-link to="/">
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                  Dashboard
                </a>
              </li>
            </router-link>
            <router-link to="/information">
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
                  Information
                </a>
              </li>
            </router-link>
            <router-link to="/statistics">
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                  Statistics
                </a>
              </li>
            </router-link>
          </ul>
        </li>
        <li class="mt-5">
          <h2 class="menu-title">User Information</h2>
          <ul>
            <router-link to="/user-list">
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  List of Users
                </a>
              </li>
            </router-link>
            <router-link to="/unverified-users">
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg>
                  Unverified Users
                </a>
              </li>
            </router-link>
          </ul>
        </li>
        <li class="mt-5">
          <h2 class="menu-title">Manage app elements</h2>
          <ul>
            <router-link to="/home-cards">
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  Manage cards
                </a>
              </li>
            </router-link>
            <router-link to="/tags">
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                  Manage tags
                </a>
              </li>
            </router-link>
          </ul>
        </li>
<!--        <li class="mt-5">-->
<!--          <h2 class="menu-title">Manage Company</h2>-->
<!--          <ul>-->
<!--            <router-link to="/company-list">-->
<!--              <li>-->
<!--                <a>-->
<!--                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
<!--                       xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"-->
<!--                          stroke-width="2"/>-->
<!--                  </svg>-->
<!--                  View Company-->
<!--                </a>-->
<!--              </li>-->
<!--            </router-link>-->
<!--          </ul>-->
<!--        </li>-->
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
