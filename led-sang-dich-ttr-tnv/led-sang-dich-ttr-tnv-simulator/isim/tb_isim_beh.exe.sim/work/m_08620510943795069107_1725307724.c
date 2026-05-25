/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/led-sang-dich-ttr-tnv/design.v";
static unsigned int ng1[] = {0U, 0U};
static unsigned int ng2[] = {24U, 0U};
static int ng3[] = {1, 0};
static int ng4[] = {7, 0};
static int ng5[] = {4, 0};
static int ng6[] = {3, 0};
static int ng7[] = {0, 0};
static unsigned int ng8[] = {129U, 0U};



static void Always_2_0(char *t0)
{
    char t20[8];
    char t44[8];
    char t45[8];
    char t46[8];
    char t47[8];
    char *t1;
    char *t2;
    char *t3;
    char *t4;
    char *t5;
    unsigned int t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    char *t11;
    char *t12;
    unsigned int t13;
    unsigned int t14;
    unsigned int t15;
    unsigned int t16;
    unsigned int t17;
    char *t18;
    char *t19;
    char *t21;
    char *t22;
    unsigned int t23;
    unsigned int t24;
    unsigned int t25;
    unsigned int t26;
    unsigned int t27;
    unsigned int t28;
    unsigned int t29;
    unsigned int t30;
    unsigned int t31;
    unsigned int t32;
    unsigned int t33;
    unsigned int t34;
    char *t35;
    char *t36;
    unsigned int t37;
    unsigned int t38;
    unsigned int t39;
    unsigned int t40;
    unsigned int t41;
    char *t42;
    char *t43;
    int t48;
    int t49;
    int t50;
    char *t51;
    int t52;
    int t53;
    int t54;
    int t55;
    int t56;

LAB0:    t1 = (t0 + 2840U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(2, ng0);
    t2 = (t0 + 3160);
    *((int *)t2) = 1;
    t3 = (t0 + 2872);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(2, ng0);

LAB5:    xsi_set_current_line(3, ng0);
    t4 = (t0 + 1208U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (~(t6));
    t8 = *((unsigned int *)t5);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB6;

LAB7:    xsi_set_current_line(4, ng0);

LAB9:    xsi_set_current_line(5, ng0);
    t2 = (t0 + 1368U);
    t3 = *((char **)t2);
    t2 = (t3 + 4);
    t6 = *((unsigned int *)t2);
    t7 = (~(t6));
    t8 = *((unsigned int *)t3);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB10;

LAB11:    xsi_set_current_line(21, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 1928);
    xsi_vlogvar_assign_value(t5, t4, 0, 0, 8);

LAB12:
LAB8:    goto LAB2;

LAB6:    xsi_set_current_line(3, ng0);
    t11 = ((char*)((ng1)));
    t12 = (t0 + 1928);
    xsi_vlogvar_assign_value(t12, t11, 0, 0, 8);
    goto LAB8;

LAB10:    xsi_set_current_line(5, ng0);

LAB13:    xsi_set_current_line(6, ng0);
    t4 = (t0 + 1528U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t13 = *((unsigned int *)t4);
    t14 = (~(t13));
    t15 = *((unsigned int *)t5);
    t16 = (t15 & t14);
    t17 = (t16 != 0);
    if (t17 > 0)
        goto LAB14;

LAB15:    xsi_set_current_line(13, ng0);

LAB30:    xsi_set_current_line(14, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = ((char*)((ng1)));
    memset(t20, 0, 8);
    t11 = (t4 + 4);
    t12 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = *((unsigned int *)t5);
    t8 = (t6 ^ t7);
    t9 = *((unsigned int *)t11);
    t10 = *((unsigned int *)t12);
    t13 = (t9 ^ t10);
    t14 = (t8 | t13);
    t15 = *((unsigned int *)t11);
    t16 = *((unsigned int *)t12);
    t17 = (t15 | t16);
    t23 = (~(t17));
    t24 = (t14 & t23);
    if (t24 != 0)
        goto LAB34;

LAB31:    if (t17 != 0)
        goto LAB33;

LAB32:    *((unsigned int *)t20) = 1;

LAB34:    t19 = (t20 + 4);
    t25 = *((unsigned int *)t19);
    t26 = (~(t25));
    t27 = *((unsigned int *)t20);
    t28 = (t27 & t26);
    t29 = (t28 != 0);
    if (t29 > 0)
        goto LAB35;

LAB36:    xsi_set_current_line(15, ng0);

LAB38:    xsi_set_current_line(16, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t20, 0, 8);
    t5 = (t20 + 4);
    t11 = (t4 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (t6 >> 4);
    *((unsigned int *)t20) = t7;
    t8 = *((unsigned int *)t11);
    t9 = (t8 >> 4);
    *((unsigned int *)t5) = t9;
    t10 = *((unsigned int *)t20);
    *((unsigned int *)t20) = (t10 & 15U);
    t13 = *((unsigned int *)t5);
    *((unsigned int *)t5) = (t13 & 15U);
    t12 = ((char*)((ng3)));
    memset(t44, 0, 8);
    xsi_vlog_unsigned_rshift(t44, 4, t20, 4, t12, 32);
    t18 = (t0 + 1928);
    t19 = (t0 + 1928);
    t21 = (t19 + 72U);
    t22 = *((char **)t21);
    t35 = ((char*)((ng4)));
    t36 = ((char*)((ng5)));
    xsi_vlog_convert_partindices(t45, t46, t47, ((int*)(t22)), 2, t35, 32, 1, t36, 32, 1);
    t42 = (t45 + 4);
    t14 = *((unsigned int *)t42);
    t48 = (!(t14));
    t43 = (t46 + 4);
    t15 = *((unsigned int *)t43);
    t49 = (!(t15));
    t50 = (t48 && t49);
    t51 = (t47 + 4);
    t16 = *((unsigned int *)t51);
    t52 = (!(t16));
    t53 = (t50 && t52);
    if (t53 == 1)
        goto LAB39;

LAB40:    xsi_set_current_line(17, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t20, 0, 8);
    t5 = (t20 + 4);
    t11 = (t4 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (t6 >> 0);
    *((unsigned int *)t20) = t7;
    t8 = *((unsigned int *)t11);
    t9 = (t8 >> 0);
    *((unsigned int *)t5) = t9;
    t10 = *((unsigned int *)t20);
    *((unsigned int *)t20) = (t10 & 15U);
    t13 = *((unsigned int *)t5);
    *((unsigned int *)t5) = (t13 & 15U);
    t12 = ((char*)((ng3)));
    memset(t44, 0, 8);
    xsi_vlog_unsigned_lshift(t44, 4, t20, 4, t12, 32);
    t18 = (t0 + 1928);
    t19 = (t0 + 1928);
    t21 = (t19 + 72U);
    t22 = *((char **)t21);
    t35 = ((char*)((ng6)));
    t36 = ((char*)((ng7)));
    xsi_vlog_convert_partindices(t45, t46, t47, ((int*)(t22)), 2, t35, 32, 1, t36, 32, 1);
    t42 = (t45 + 4);
    t14 = *((unsigned int *)t42);
    t48 = (!(t14));
    t43 = (t46 + 4);
    t15 = *((unsigned int *)t43);
    t49 = (!(t15));
    t50 = (t48 && t49);
    t51 = (t47 + 4);
    t16 = *((unsigned int *)t51);
    t52 = (!(t16));
    t53 = (t50 && t52);
    if (t53 == 1)
        goto LAB41;

LAB42:
LAB37:
LAB16:    goto LAB12;

LAB14:    xsi_set_current_line(6, ng0);

LAB17:    xsi_set_current_line(7, ng0);
    t11 = (t0 + 1928);
    t12 = (t11 + 56U);
    t18 = *((char **)t12);
    t19 = ((char*)((ng1)));
    memset(t20, 0, 8);
    t21 = (t18 + 4);
    t22 = (t19 + 4);
    t23 = *((unsigned int *)t18);
    t24 = *((unsigned int *)t19);
    t25 = (t23 ^ t24);
    t26 = *((unsigned int *)t21);
    t27 = *((unsigned int *)t22);
    t28 = (t26 ^ t27);
    t29 = (t25 | t28);
    t30 = *((unsigned int *)t21);
    t31 = *((unsigned int *)t22);
    t32 = (t30 | t31);
    t33 = (~(t32));
    t34 = (t29 & t33);
    if (t34 != 0)
        goto LAB21;

LAB18:    if (t32 != 0)
        goto LAB20;

LAB19:    *((unsigned int *)t20) = 1;

LAB21:    t36 = (t20 + 4);
    t37 = *((unsigned int *)t36);
    t38 = (~(t37));
    t39 = *((unsigned int *)t20);
    t40 = (t39 & t38);
    t41 = (t40 != 0);
    if (t41 > 0)
        goto LAB22;

LAB23:    xsi_set_current_line(8, ng0);

LAB25:    xsi_set_current_line(9, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t20, 0, 8);
    t5 = (t20 + 4);
    t11 = (t4 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (t6 >> 4);
    *((unsigned int *)t20) = t7;
    t8 = *((unsigned int *)t11);
    t9 = (t8 >> 4);
    *((unsigned int *)t5) = t9;
    t10 = *((unsigned int *)t20);
    *((unsigned int *)t20) = (t10 & 15U);
    t13 = *((unsigned int *)t5);
    *((unsigned int *)t5) = (t13 & 15U);
    t12 = ((char*)((ng3)));
    memset(t44, 0, 8);
    xsi_vlog_unsigned_lshift(t44, 4, t20, 4, t12, 32);
    t18 = (t0 + 1928);
    t19 = (t0 + 1928);
    t21 = (t19 + 72U);
    t22 = *((char **)t21);
    t35 = ((char*)((ng4)));
    t36 = ((char*)((ng5)));
    xsi_vlog_convert_partindices(t45, t46, t47, ((int*)(t22)), 2, t35, 32, 1, t36, 32, 1);
    t42 = (t45 + 4);
    t14 = *((unsigned int *)t42);
    t48 = (!(t14));
    t43 = (t46 + 4);
    t15 = *((unsigned int *)t43);
    t49 = (!(t15));
    t50 = (t48 && t49);
    t51 = (t47 + 4);
    t16 = *((unsigned int *)t51);
    t52 = (!(t16));
    t53 = (t50 && t52);
    if (t53 == 1)
        goto LAB26;

LAB27:    xsi_set_current_line(10, ng0);
    t2 = (t0 + 1928);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t20, 0, 8);
    t5 = (t20 + 4);
    t11 = (t4 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (t6 >> 0);
    *((unsigned int *)t20) = t7;
    t8 = *((unsigned int *)t11);
    t9 = (t8 >> 0);
    *((unsigned int *)t5) = t9;
    t10 = *((unsigned int *)t20);
    *((unsigned int *)t20) = (t10 & 15U);
    t13 = *((unsigned int *)t5);
    *((unsigned int *)t5) = (t13 & 15U);
    t12 = ((char*)((ng3)));
    memset(t44, 0, 8);
    xsi_vlog_unsigned_rshift(t44, 4, t20, 4, t12, 32);
    t18 = (t0 + 1928);
    t19 = (t0 + 1928);
    t21 = (t19 + 72U);
    t22 = *((char **)t21);
    t35 = ((char*)((ng6)));
    t36 = ((char*)((ng7)));
    xsi_vlog_convert_partindices(t45, t46, t47, ((int*)(t22)), 2, t35, 32, 1, t36, 32, 1);
    t42 = (t45 + 4);
    t14 = *((unsigned int *)t42);
    t48 = (!(t14));
    t43 = (t46 + 4);
    t15 = *((unsigned int *)t43);
    t49 = (!(t15));
    t50 = (t48 && t49);
    t51 = (t47 + 4);
    t16 = *((unsigned int *)t51);
    t52 = (!(t16));
    t53 = (t50 && t52);
    if (t53 == 1)
        goto LAB28;

LAB29:
LAB24:    goto LAB16;

LAB20:    t35 = (t20 + 4);
    *((unsigned int *)t20) = 1;
    *((unsigned int *)t35) = 1;
    goto LAB21;

LAB22:    xsi_set_current_line(7, ng0);
    t42 = ((char*)((ng2)));
    t43 = (t0 + 1928);
    xsi_vlogvar_assign_value(t43, t42, 0, 0, 8);
    goto LAB24;

LAB26:    t17 = *((unsigned int *)t47);
    t54 = (t17 + 0);
    t23 = *((unsigned int *)t45);
    t24 = *((unsigned int *)t46);
    t55 = (t23 - t24);
    t56 = (t55 + 1);
    xsi_vlogvar_assign_value(t18, t44, t54, *((unsigned int *)t46), t56);
    goto LAB27;

LAB28:    t17 = *((unsigned int *)t47);
    t54 = (t17 + 0);
    t23 = *((unsigned int *)t45);
    t24 = *((unsigned int *)t46);
    t55 = (t23 - t24);
    t56 = (t55 + 1);
    xsi_vlogvar_assign_value(t18, t44, t54, *((unsigned int *)t46), t56);
    goto LAB29;

LAB33:    t18 = (t20 + 4);
    *((unsigned int *)t20) = 1;
    *((unsigned int *)t18) = 1;
    goto LAB34;

LAB35:    xsi_set_current_line(14, ng0);
    t21 = ((char*)((ng8)));
    t22 = (t0 + 1928);
    xsi_vlogvar_assign_value(t22, t21, 0, 0, 8);
    goto LAB37;

LAB39:    t17 = *((unsigned int *)t47);
    t54 = (t17 + 0);
    t23 = *((unsigned int *)t45);
    t24 = *((unsigned int *)t46);
    t55 = (t23 - t24);
    t56 = (t55 + 1);
    xsi_vlogvar_assign_value(t18, t44, t54, *((unsigned int *)t46), t56);
    goto LAB40;

LAB41:    t17 = *((unsigned int *)t47);
    t54 = (t17 + 0);
    t23 = *((unsigned int *)t45);
    t24 = *((unsigned int *)t46);
    t55 = (t23 - t24);
    t56 = (t55 + 1);
    xsi_vlogvar_assign_value(t18, t44, t54, *((unsigned int *)t46), t56);
    goto LAB42;

}


extern void work_m_08620510943795069107_1725307724_init()
{
	static char *pe[] = {(void *)Always_2_0};
	xsi_register_didat("work_m_08620510943795069107_1725307724", "isim/tb_isim_beh.exe.sim/work/m_08620510943795069107_1725307724.didat");
	xsi_register_executes(pe);
}
