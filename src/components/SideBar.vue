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
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                  </svg>
                  Dashboard
                </a>
              </li>
            </router-link>
            <li>
              <a>
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                Information
              </a>
            </li>
            <li>
              <a>
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                Statistics
              </a>
            </li>
          </ul>
        </li>
        <li class="mt-5">
          <h2 class="menu-title">User Information</h2>
          <ul>
            <router-link to="/user-list">
              <li>
                <a>
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                  </svg>
                  List of Users
                </a>
              </li>
            </router-link>
            <router-link to="/unverified-users">
              <li>
                <a>
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                  </svg>
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
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                  </svg>
                  Manage cards
                </a>
              </li>
            </router-link>
            <router-link to="/tags">
              <li>
                <a>
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"/>
                  </svg>
                  Manage tags
                </a>
              </li>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
