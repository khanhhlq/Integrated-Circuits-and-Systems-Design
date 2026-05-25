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
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/led-sang-dich-ttr/design.v";
static unsigned int ng1[] = {24U, 0U};
static unsigned int ng2[] = {0U, 0U};
static int ng3[] = {1, 0};
static int ng4[] = {7, 0};
static int ng5[] = {4, 0};
static int ng6[] = {3, 0};
static int ng7[] = {0, 0};



static void Always_2_0(char *t0)
{
    char t13[8];
    char t30[8];
    char t31[8];
    char t32[8];
    char t33[8];
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
    unsigned int t14;
    unsigned int t15;
    unsigned int t16;
    unsigned int t17;
    unsigned int t18;
    unsigned int t19;
    unsigned int t20;
    char *t21;
    char *t22;
    unsigned int t23;
    unsigned int t24;
    unsigned int t25;
    unsigned int t26;
    unsigned int t27;
    char *t28;
    char *t29;
    char *t34;
    char *t35;
    char *t36;
    int t37;
    char *t38;
    int t39;
    int t40;
    char *t41;
    int t42;
    int t43;
    int t44;
    int t45;
    int t46;

LAB0:    t1 = (t0 + 2520U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(2, ng0);
    t2 = (t0 + 2840);
    *((int *)t2) = 1;
    t3 = (t0 + 2552);
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

LAB7:    xsi_set_current_line(5, ng0);

LAB9:    xsi_set_current_line(6, ng0);
    t2 = (t0 + 1608);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = ((char*)((ng2)));
    memset(t13, 0, 8);
    t11 = (t4 + 4);
    t12 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = *((unsigned int *)t5);
    t8 = (t6 ^ t7);
    t9 = *((unsigned int *)t11);
    t10 = *((unsigned int *)t12);
    t14 = (t9 ^ t10);
    t15 = (t8 | t14);
    t16 = *((unsigned int *)t11);
    t17 = *((unsigned int *)t12);
    t18 = (t16 | t17);
    t19 = (~(t18));
    t20 = (t15 & t19);
    if (t20 != 0)
        goto LAB13;

LAB10:    if (t18 != 0)
        goto LAB12;

LAB11:    *((unsigned int *)t13) = 1;

LAB13:    t22 = (t13 + 4);
    t23 = *((unsigned int *)t22);
    t24 = (~(t23));
    t25 = *((unsigned int *)t13);
    t26 = (t25 & t24);
    t27 = (t26 != 0);
    if (t27 > 0)
        goto LAB14;

LAB15:    xsi_set_current_line(9, ng0);

LAB17:    xsi_set_current_line(10, ng0);
    t2 = (t0 + 1608);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t13, 0, 8);
    t5 = (t13 + 4);
    t11 = (t4 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (t6 >> 4);
    *((unsigned int *)t13) = t7;
    t8 = *((unsigned int *)t11);
    t9 = (t8 >> 4);
    *((unsigned int *)t5) = t9;
    t10 = *((unsigned int *)t13);
    *((unsigned int *)t13) = (t10 & 15U);
    t14 = *((unsigned int *)t5);
    *((unsigned int *)t5) = (t14 & 15U);
    t12 = ((char*)((ng3)));
    memset(t30, 0, 8);
    xsi_vlog_unsigned_lshift(t30, 4, t13, 4, t12, 32);
    t21 = (t0 + 1608);
    t22 = (t0 + 1608);
    t28 = (t22 + 72U);
    t29 = *((char **)t28);
    t34 = ((char*)((ng4)));
    t35 = ((char*)((ng5)));
    xsi_vlog_convert_partindices(t31, t32, t33, ((int*)(t29)), 2, t34, 32, 1, t35, 32, 1);
    t36 = (t31 + 4);
    t15 = *((unsigned int *)t36);
    t37 = (!(t15));
    t38 = (t32 + 4);
    t16 = *((unsigned int *)t38);
    t39 = (!(t16));
    t40 = (t37 && t39);
    t41 = (t33 + 4);
    t17 = *((unsigned int *)t41);
    t42 = (!(t17));
    t43 = (t40 && t42);
    if (t43 == 1)
        goto LAB18;

LAB19:    xsi_set_current_line(11, ng0);
    t2 = (t0 + 1608);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    memset(t13, 0, 8);
    t5 = (t13 + 4);
    t11 = (t4 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (t6 >> 0);
    *((unsigned int *)t13) = t7;
    t8 = *((unsigned int *)t11);
    t9 = (t8 >> 0);
    *((unsigned int *)t5) = t9;
    t10 = *((unsigned int *)t13);
    *((unsigned int *)t13) = (t10 & 15U);
    t14 = *((unsigned int *)t5);
    *((unsigned int *)t5) = (t14 & 15U);
    t12 = ((char*)((ng3)));
    memset(t30, 0, 8);
    xsi_vlog_unsigned_rshift(t30, 4, t13, 4, t12, 32);
    t21 = (t0 + 1608);
    t22 = (t0 + 1608);
    t28 = (t22 + 72U);
    t29 = *((char **)t28);
    t34 = ((char*)((ng6)));
    t35 = ((char*)((ng7)));
    xsi_vlog_convert_partindices(t31, t32, t33, ((int*)(t29)), 2, t34, 32, 1, t35, 32, 1);
    t36 = (t31 + 4);
    t15 = *((unsigned int *)t36);
    t37 = (!(t15));
    t38 = (t32 + 4);
    t16 = *((unsigned int *)t38);
    t39 = (!(t16));
    t40 = (t37 && t39);
    t41 = (t33 + 4);
    t17 = *((unsigned int *)t41);
    t42 = (!(t17));
    t43 = (t40 && t42);
    if (t43 == 1)
        goto LAB20;

LAB21:
LAB16:
LAB8:    goto LAB2;

LAB6:    xsi_set_current_line(4, ng0);
    t11 = ((char*)((ng1)));
    t12 = (t0 + 1608);
    xsi_vlogvar_assign_value(t12, t11, 0, 0, 8);
    goto LAB8;

LAB12:    t21 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t21) = 1;
    goto LAB13;

LAB14:    xsi_set_current_line(7, ng0);
    t28 = ((char*)((ng1)));
    t29 = (t0 + 1608);
    xsi_vlogvar_assign_value(t29, t28, 0, 0, 8);
    goto LAB16;

LAB18:    t18 = *((unsigned int *)t33);
    t44 = (t18 + 0);
    t19 = *((unsigned int *)t31);
    t20 = *((unsigned int *)t32);
    t45 = (t19 - t20);
    t46 = (t45 + 1);
    xsi_vlogvar_assign_value(t21, t30, t44, *((unsigned int *)t32), t46);
    goto LAB19;

LAB20:    t18 = *((unsigned int *)t33);
    t44 = (t18 + 0);
    t19 = *((unsigned int *)t31);
    t20 = *((unsigned int *)t32);
    t45 = (t19 - t20);
    t46 = (t45 + 1);
    xsi_vlogvar_assign_value(t21, t30, t44, *((unsigned int *)t32), t46);
    goto LAB21;

}


extern void work_m_00754740855816611612_4229425971_init()
{
	static char *pe[] = {(void *)Always_2_0};
	xsi_register_didat("work_m_00754740855816611612_4229425971", "isim/tb_isim_beh.exe.sim/work/m_00754740855816611612_4229425971.didat");
	xsi_register_executes(pe);
}
